<?php

namespace App\Http\Controllers\Api\V100;

use App\Http\Controllers\Controller;
use App\Http\Resources\AddOnResource;
use App\Http\Resources\PageResource;
use App\Models\Currency;
use App\Models\Language;
use App\Repositories\Admin\Page\PageRepository;
use App\Repositories\Interfaces\Admin\AddonInterface;
use App\Repositories\Interfaces\Admin\Page\PageInterface;
use App\Traits\ApiReturnFormatTrait;
use Illuminate\Http\Request;

class APIController extends Controller
{
    use ApiReturnFormatTrait;

    public function config(AddonInterface $addon,PageRepository $pageRepository): \Illuminate\Http\JsonResponse
    {
        try {
            $languages = Language::where('status',1)->selectRaw('id,name,locale as code,text_direction,flag')->get();
            $data = [
                'app_config'                    => [
                    'login_mandatory' => settingHelper('mandatory_login') == 1,
                    'intro_skippable' => settingHelper('intro_skippable') == 1,
                    'privacy_policy_url' => nullCheck(settingHelper('privacy_policy_url')),
                    'terms_condition_url' => nullCheck(settingHelper('terms_condition_url')),
                    'support_url' => nullCheck(settingHelper('support_url')),
                    'seller_system' => settingHelper('seller_system') == 1,
                    'color_system' => settingHelper('color') == 1,
                    'pickup_point_system' => settingHelper('pickup_point') == 1,
                    'wallet_system' => settingHelper('wallet_system') == 1,
                    'coupon_system' => settingHelper('wallet_system') == 1,
                ],
                'android_version'               => [
                    'apk_version' => settingHelper('latest_apk_version'),
                    'apk_code' => settingHelper('latest_apk_code'),
                    'apk_file_url' => settingHelper('apk_file_url'),
                    'whats_new' => settingHelper('whats_new_latest_apk'),
                    'is_skippable' => settingHelper('android_skippable'),
                ],
                'ios_version'                   => [
                    'ipa_version' => settingHelper('latest_ipa_version'),
                    'ipa_code' => settingHelper('latest_ipa_code'),
                    'ipa_file_url' => settingHelper('ipa_file_url'),
                    'whats_new' => settingHelper('whats_new_latest_ipa'),
                    'is_skippable' => settingHelper('ios_skippable'),
                ],
                'payment_methods'               => [
                    'paypal' => [
                        'is_activated' => settingHelper('is_paypal_activated') == 1,
                        'client_id' => settingHelper('paypal_client_id'),
                    ],
                    'stripe' => [
                        'is_activated' => settingHelper('is_stripe_activated') == 1,
                        'publishable_key' => settingHelper('stripe_key'),
                        'secret_key' => settingHelper('stripe_secret'),
                    ],
                    'ssl_commerze' => [
                        'is_activated' => settingHelper('is_sslcommerz_activated') == 1,
                        'sandbox_mode' => settingHelper('is_sslcommerz_sandbox_mode_activated') == 1,
                        'store_id' => settingHelper('sslcommerz_id'),
                        'store_password' => settingHelper('sslcommerz_password'),
                    ],
                    'paytm' => [
                        'is_activated' => settingHelper('is_paytm_activated') == 1,
                        'merchant_id' => settingHelper('merchant_id'),
                        'merchant_key' => settingHelper('merchant_key'),
                        'merchant_website' => settingHelper('merchant_website'),
                        'channel' => settingHelper('channel'),
                        'industry_type' => settingHelper('industry_type'),
                    ],
                    'jazz_cash' => [
                        'is_activated' => settingHelper('is_jazz_cash_activated') == 1,
                        'merchant_id' => settingHelper('jazz_cash_merchant_id'),
                        'password' => settingHelper('jazz_cash_password'),
                        'integrity_salt' => settingHelper('jazz_cash_integrity_salt')
                    ],
                    'razor_pay' => [
                        'is_activated' => settingHelper('is_razorpay_activated') == 1,
                        'client_key' => settingHelper('razorpay_key'),
                        'client_secret' => settingHelper('razorpay_secret')
                    ]
                ],
                'addons'                        => AddOnResource::collection($addon->all()->get()),
                'languages'                     => count($languages) > 0 ? $languages->makeHidden(['flag']) : [],
                'currencies'                    => Currency::where('status',1)->selectRaw('id,name,symbol,code,exchange_rate')->get(),
                'pages'                         => PageResource::collection($pageRepository->allPages()),
                'currency_config'               => [
                    'currency_symbol_format'    => settingHelper('currency_symbol_format'),
                    'decimal_separator'         => settingHelper('decimal_separator'),
                    'no_of_decimals'            => settingHelper('no_of_decimals'),
                ]
            ];
            return $this->responseWithSuccess(__('Config Retrieved'), $data, 200);
        } catch (\Exception $e) {
            return $this->responseWithError(__('Something Went Wrong'), [], null);
        }
    }

    public function page(PageInterface $page,$id,Request $request)
    {
        try {
            $page = $page->get($id);
            $data = [
                'page' => $page,
                'lang' => $request->lang,
            ];
            return view('api.page',$data);
        } catch (\Exception $e) {
            return response()->json([
                'error' =>  __( 'Oops...Something Went Wrong')
            ]);
        }
    }
}
