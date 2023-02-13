<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\OrderPaginateResource;
use App\Repositories\Interfaces\Admin\Addon\OfflineMethodInterface;
use App\Repositories\Interfaces\Admin\AddonInterface;
use App\Repositories\Interfaces\Admin\CurrencyInterface;
use App\Repositories\Interfaces\Admin\OrderInterface;
use App\Repositories\Interfaces\Site\CartInterface;
use App\Traits\ApiReturnFormatTrait;
use App\Traits\PaymentTrait;
use Sentinel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class OrderController extends Controller
{
    use ApiReturnFormatTrait,PaymentTrait;

    protected $order;

    public function __construct(OrderInterface $order)
    {
        $this->order = $order;
    }

    public function index(OrderInterface $orderList,Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }

            $data = [
                'orders' => OrderPaginateResource::collection($orderList->allOrder(get_pagination('api_paginate'),$user)),
            ];

            return $this->responseWithSuccess(__('Orders Found Successfully'), $data, 200);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function downloadInvoice(Request $request,$id): \Illuminate\Http\JsonResponse
    {
        try {
            $user = null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                }
            }

            $order = $this->order->get($id);

            if ($order && $user && $order->user_id != $user->id)
            {
                return abort(403,'Unauthorized');
            }
            if ($order && !$user && $order->user_id != getWalkInCustomer()->id)
            {
                return abort(403,'Unauthorized');
            }


            return $this->order->invoiceDownload($id);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function trackOrder(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'invoice_no' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->responseWithError(__('Required field missing'), $validator->errors(), 422);
            }
            $user= null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                }
            }

            $order_details = [];
            $order = $this->order->orderByCode($request->invoice_no);

            if ($order && $user && $order->user_id != $user->id)
            {
                return $this->responseWithError(__('unauthorized_user'), [], 401);
            }
            if ($order && !$user && $order->user_id != getWalkInCustomer()->id)
            {
                return $this->responseWithError(__('unauthorized_user'), [], 401);
            }

            if($order){
                foreach ($order->orderDetails as $orderDetail) {
                    $total_amount = (($orderDetail->price * $orderDetail->quantity) + $orderDetail->tax + $orderDetail->shipping_cost['total_cost']) - ($orderDetail->discount + $orderDetail->coupon_discount['discount']);
                    $order_details[] = [
                        'id'                        =>  $orderDetail->id,
                        'product_name'              =>  $orderDetail->product->product_name,
                        'quantity'                  =>  $orderDetail->quantity,
                        'price'                     =>  $orderDetail->price,
                        'formatted_price'           =>  (string)$orderDetail->price,
                        'tax'                       =>  $orderDetail->tax,
                        'formatted_tax'             =>  (string)$orderDetail->tax,
                        'discount'                  =>  $orderDetail->discount,
                        'formatted_discount'        =>  (string)$orderDetail->discount,
                        'coupon_discount'           =>  $orderDetail->coupon_discount['discount'],
                        'formatted_coupon_discount' =>  (string)$orderDetail->coupon_discount['discount'],
                        'shipping_cost'             =>  $orderDetail->shipping_cost['total_cost'],
                        'formatted_shipping_cost'   =>  (string)$orderDetail->shipping_cost['total_cost'],
                        'sub_total'                 =>  $orderDetail->price * $orderDetail->quantity,
                        'formatted_sub_total'       => (string)($orderDetail->price * $orderDetail->quantity),
                        'total_payable'             =>  $total_amount,
                        'formatted_total_payable'   =>  (string)$total_amount,
                    ];
                }
                $data = [
                    'order' => [
                        'id'                        => $order->id,
                        'invoice_no'                => $order->code,
                        'date'                      => $order->date,
                        'order_status'              => $order->delivery_status,
                        'payment_status'            => $order->payment_status,
                        'payment_type'              => $order->payment_type,
                        'sub_total'                 => $order->sub_total,
                        'formatted_sub_total'       => $order->sub_total,
                        'discount'                  => $order->discount,
                        'formatted_discount'        => $order->discount,
                        'coupon_discount'           => $order->coupon_discount,
                        'formatted_coupon_discount' => $order->coupon_discount,
                        'tax'                       => $order->total_tax,
                        'formatted_tax'             => $order->total_tax,
                        'shipping_cost'             => $order->shipping_cost,
                        'formatted_shipping_cost'   => $order->shipping_cost,
                        'total_payable'             => $order->total_payable,
                        'formatted_total_payable'   => $order->total_payable,
                        'is_order_placed'           => true,
                        'is_order_accepted'         => $order->delivery_status == 'confirm',
                        'is_order_processing'       => $order->delivery_status != 'confirm' || $order->delivery_status != 'pending',
                        'is_order_delivered'        => $order->delivery_status == 'delivered',
                        'order_details'             => $order_details
                    ]
                ];
                if ($order->billing_address && count($order->billing_address) > 0)
                {
                    $data['order']['billing_address'] = $order->billing_address ;
                }
                if ($order->shipping_address && count($order->shipping_address) > 0)
                {
                    $data['order']['shipping_address'] = $order->shipping_address ;
                }
                return $this->responseWithSuccess(__('Order Found Successfully'), $data, 200);
            }else{
                return $this->responseWithNotFound(__('Order Not Found'));
            }

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function confirmOrder(Request $request,CartInterface $cart): \Illuminate\Http\JsonResponse
    {
        DB::beginTransaction();
        try {

            $user= null;
            if ($request->token)
            {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                }
            }

            $carts = $cart->cartList($user,['trx_id' => $request->trx_id]);
            $checkout = $cart->checkoutCoupon($carts, ['coupon'],$user);

            $order = $this->order->confirmOrder($checkout, $carts, $request->all(),$user);

            DB::commit();

            if (is_array($order)) {

                return $this->responseWithSuccess(__('Order done'), $order, 200);
            } else {
                $data = [
                    'error' => $order
                ];
                return $this->responseWithError(__('Something Went Wrong'), $data, 500);
            }

        } catch (\Exception $e) {
            DB::rollBack();
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function payment(Request $request,CurrencyInterface $currency, OfflineMethodInterface $offlineMethod,AddonInterface $addon)
    {
        try {
            $user = null;
            if ($request->token) {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                    return $this->responseWithError(__('unauthorized_user'), [], 401);
                }
            }
            if($user)
            {
                Sentinel::login($user);
            }

            $orders = $this->order->takePaymentOrder($request->trx_id);
            $check_cod = $this->order->checkCodByTrx($request->trx_id);

            if (count($orders) > 0)
            {
                $data = [
                    'token'             => $request->token,
                    'orders'            => $orders,
                    'indian_currency'   => $currency->currencyByCode('INR'),
                    'offline_methods'   => addon_is_activated('offline_payment') ? $offlineMethod->activeMethods() : [],
                    'jazz_data'         => $this->jazzCashPayment(),
                    'check_cod'         => $check_cod,
                    'jazz_url'          => config('jazz_cash.TRANSACTION_POST_URL'),
                    'addons'            => $addon->activePlugin(),
                    'trx_id'            => $request->trx_id ? : $orders->first()->trx_id,
                    'code'              => $request->invoice_no,
                    'dark_logo'         => settingHelper('dark_logo') != [] && @is_file_exists(settingHelper('dark_logo')['original_image']) ?  get_media(@settingHelper('dark_logo')['original_image'], @settingHelper('dark_logo')['storage']) : static_asset('images/default/dark-logo.png'),
                    'favicon'           => @is_file_exists(@settingHelper('favicon')['image_57x57_url']) ? get_media(settingHelper('favicon')['image_57x57_url']) : static_asset('images/ico/apple-touch-icon-57-precomposed.png'),
                    'default_assets'    => [
                        'razor_pay'                     => static_asset('images/payment-method/razorpay.png'),
                        'stripe'                        => static_asset('images/payment-method/stripe.png'),
                        'paypal'                        => static_asset('images/payment-method/paypal.png'),
                        'paytm'                         => static_asset('images/payment-method/paytm.png'),
                        'ssl_commerze'                  => static_asset('images/payment-method/ssl_commerze.png'),
                        'jazz_cash'                     => static_asset('images/payment-method/JazzCash.png'),
                        'pay_later'                     => static_asset('images/payment-method/paylater.jpg'),
                        'cash'                          => static_asset('images/payment-method/cash.png'),
                        'preloader'                     => static_asset('images/default/preloader.gif'),
                        'review_image'                  => static_asset('images/others/env.svg'),
                    ]
                ];
            }

            else{
                return [
                    'error' => __('no_data_found')
                ];
            }


            return view('api.payment',$data);

        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function completeOrder(OrderInterface $order, OfflineMethodInterface $offlineMethod, Request $request)
    {
        DB::beginTransaction();
        try {
            $user = null;
            if ($request->token) {
                try {
                    if (!$user = JWTAuth::parseToken()->authenticate()) {
                        return $this->responseWithError(__('unauthorized_user'), [], 401);
                    }
                } catch (\Exception $e) {
                }
            }
            if($user)
            {
                Sentinel::login($user);
            }

            $data = [
                'orders' => $order->completeOrder($request->all(), $user, $offlineMethod),
                'success' => __('Order Completed')
            ];

            DB::commit();

            if (request()->ajax()) {
                return response()->json($data);
            } else {
                return redirect()->route('api.payment.success');
            }
        } catch (\Exception $e) {
            DB::rollBack();
            session()->forget('trx_id');
            if (request()->ajax()) {
                return response()->json(['error' => __('oops...Something Went Wrong')]);
            } else {
                return redirect()->back()->with(['error' => __('oops...Something Went Wrong')]);
            }
        }
    }

    public function paymentSuccess()
    {
        $data = [
            'favicon'           => @is_file_exists(@settingHelper('favicon')['image_57x57_url']) ? get_media(settingHelper('favicon')['image_57x57_url']) : static_asset('images/ico/apple-touch-icon-57-precomposed.png'),
        ];
        return view('api.payment-success',$data);
    }

    public function payWithJazzcash()
    {
        $data['jazz_cash_no'] =  '03123456789';
        $data['cnic_digits']  =  '345678';
        $data['price'] 		  =  500;

        $data['paymentMethod']=  'jazzcashMobile';
       /* $data['ccNo']		  =  $_POST['ccNo'];
        $data['expMonth']	  =  $_POST['expMonth'];
        $data['expYear']	  =  $_POST['expYear'];
        $data['cvv']		  =  $_POST['cvv'];*/


        $response = $this->createCharge($data);

        echo '<pre>';
        print_r($response);
        echo '</pre>';
    }
}
