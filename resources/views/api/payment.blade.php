<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ __('payment') }}</title>
    <link rel="stylesheet" href="{{ static_asset('admin/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ static_asset('frontend/css/main.css') }}">
    <link rel="stylesheet" href="{{ static_asset('frontend/css/development.css') }}">
    <link rel="stylesheet" href="{{ static_asset('frontend/css/responsive.css') }}">
    <link rel="stylesheet" href="{{ static_asset('admin/css/toastr.min.css') }}">

</head>
<body>

<section class="shopping-cart api">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-5">
                <div class="sg-shipping">
                    <div class="card-list">
                        <ul class="global-list grid-3">
                            @if(settingHelper('is_paypal_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" value="paypal"
                                               id="paypal" name="payment">
                                        <label for="paypal">
                                            <img src="{{ url('public/images/payment-method/paypal.svg') }}" alt="paypal"
                                                 class="img-fluid">
                                            {{ __('pay_with_payPal') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(settingHelper('is_stripe_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="stripe" value="stripe"
                                               name="payment">
                                        <label for="stripe">
                                            <img src="{{ url('public/images/payment-method/stripe.svg') }}" alt="stripe"
                                                 class="img-fluid">
                                            {{ __('pay_with_stripe') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(settingHelper('is_sslcommerz_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" name="payment"
                                               id="ssl_commerze" value="ssl_commerze">
                                        <label for="ssl_commerze">
                                            <img src="{{ $default_assets['ssl_commerze'] }}" alt="ssl_commerze"
                                                 width="90">
                                            {{ __('pay_with_sSLCOMMERZE') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(settingHelper('is_paytm_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="paytm" value="paytm"
                                               name="payment">
                                        <label for="paytm">
                                            <img src="{{ url('public/images/payment-method/paytm.svg') }}" alt="paytm"
                                                 class="img-fluid">
                                            {{ __('pay_with_paytm') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(settingHelper('is_razorpay_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="razor_pay" value="razor_pay"
                                               @change="integrateRazorPay" name="payment">
                                        <label for="razor_pay">
                                            <img src="{{ url('public/images/payment-method/razorpay.svg') }}" alt="razor_pay"
                                                 width="90"
                                                 class="img-fluid">
                                            {{ __('pay_with_razorpay') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(settingHelper('is_jazz_cash_activated') == 1)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="jazzCash" value="jazz_cash"
                                               name="payment">
                                        <label for="jazzCash">
                                            <img src="{{ url('public/images/payment-method/jazzCash.svg') }}" alt="jazzCash"
                                                 width="90"
                                                 class="img-fluid">
                                            {{ __('pay_with_jazzCash') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(settingHelper('pay_later_system') == 1 && authUser())
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="pay_later"
                                               value="pay_later" name="payment">
                                        <label for="pay_later">
                                            <img src="{{ $default_assets['pay_later'] }}" alt="pay_later"
                                                 width="90" class="img-fluid">
                                            {{ __('pay_later') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(!$check_cod)
                                <li>
                                    <div class="input-checkbox">
                                        <input type="radio" id="cash"
                                               value="cash_on_delivery" name="payment">
                                        <label for="cash">
                                            <img src="{{ $default_assets['cash'] }}" alt="cash"
                                                 class="img-fluid">
                                            {{ __('cash_on_delivery') }}
                                        </label>
                                    </div>
                                </li>
                            @endif
                            @if(in_array('offline_payment',$addons))
                                @foreach($offline_methods as $offline)
                                    <li>
                                        <div class="input-checkbox">
                                            <input type="radio" data-value="{{$offline}}" id="offline_{{$offline->id}}"
                                                   value="offline_method" name="payment">
                                            <label for="offline_{{$offline->id}}">
                                                <img src="{{ $offline->image }}" alt="{{ $offline->name }}"
                                                     class="img-fluid">
                                                {{ $offline->name }}
                                            </label>
                                        </div>
                                    </li>
                                @endforeach
                            @endif
                        </ul>
                        @if(authUser() && authUser()->balance >= $orders->sum('total_payable') && settingHelper('wallet_system') == 1)
                            <div class="row text-center">
                                <div class="col-lg-12">
                                    <div class="separator mb-3">
                                    <span class="bg-white px-3">
                                        <span class="opacity-60">{{ __('or') }}</span>
                                    </span>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <p>{{ __('your_wallet_balance') }} : {{ get_price(authUser()->balance) }}</p>
                                    <button type="button" id="wallet_submit" data-type="wallet"
                                       class="btn btn-primary form_submit">{{ __('pay_with_wallet') }}</button>
                                    <button class="btn btn-primary d-none loading" type="button" disabled>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span class="sr-only"></span>
                                    </button>
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>

            <div class="col-lg-4 pl-lg-5">
                <div class="order-summary">
                    <h6>{{ __('price_details') }}</h6>

                    <div class="sg-card">
                        @php
                            $action_url = authUser() ? url('api/complete-order') : url('api/complete-order?&guest=1');
                        @endphp
                        <form action="{{ $action_url }}" method="post">@csrf
                            <input type="hidden" name="trx_id" value="{{ $trx_id }}">
                            <input type="hidden" name="code" value="{{ $code }}">
                            <input type="hidden" name="token" value="{{ $token }}">
                            <input type="hidden" name="payment_type" value="razor_pay">
                            <input type="hidden" name="amount" value="{{ $orders->sum('total_payable') }}">

                        <ul class="global-list" id="razor_pay_btn_append">
                            <li>{{ __('subtotal') }}<span>{{ get_price($orders->sum('sub_total')) }}</span>
                            </li>
                            <li>{{ __('tax') }} <span>{{ get_price($orders->sum('total_tax')) }}</span>
                            </li>
                            <li>{{ __('discount') }}<span>{{ get_price($orders->sum('discount')) }}</span></li>
                            <li>{{ __('shipping_cost') }}
                                <span>{{ get_price($orders->sum('shipping_cost')) }}</span></li>
                            @if(settingHelper('coupon_system') == 1)
                                <li>{{ __('coupon_discount') }}
                                    <span>{{ get_price($orders->sum('coupon_discount')) }}</span></li>
                            @endif
                        </ul>
                        <div class="order-total">
                            <p>{{ __('total') }} <span>{{ get_price($orders->sum('total_payable')) }}</span></p>
                        </div>

                        <div class="div_btns d-none">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#stripe_modal"
                               class="btn btn-primary payment_btns d-none stripe_btn"><img
                                    width="40" src="{{ $default_assets['stripe'] }}" alt="stripe">
                                {{ __('pay_with_stripe') }}</a>

                            <a href="{{ url("user/payment/paytmRedirect") }}"
                               class="btn btn-primary payment_btns d-none paytm_btn"><img
                                    width="40" src="{{ $default_assets['paytm'] }}"
                                    alt="paytm">{{ __('pay_with_paytm') }}</a>

                            <div class="row d-none payment_btns ssl_commerze_btn">
                                <div class="col-lg-12 text-center">
                                    <button type="button"
                                            id="sslczPayBtn" order="{{ $code ?? $trx_id }}" postdata="{{ $trx_id }}"
                                            endpoint="{{ url('get/ssl-response?payment_type=ssl_commerze&payment_mode=api&code='.$code.'&trx_id='.$trx_id.'&token='.$token) }}"
                                            actionurl="{{ url('invoice/guest') }}"
                                            class="btn btn-block btn--dark btn--rounded btn--w-icon"
                                            name="button">
                                        <i class="icon icon--arrow-right"></i>
                                        {{ __('pay_with_sSLCOMMERZE') }}
                                    </button>
                                </div>
                            </div>


                            <button id="cod_n_pay_later_submit" type="button"
                               class="btn btn-primary d-none payment_btns confirm_btn form_submit">{{ __('confirm') }}</button>

                            <button class="btn btn-primary d-none loading" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span class="sr-only"></span>
                            </button>

                            <a href="javascript:void(0)" class="btn btn-primary payment_btns d-none offline_method_btn"
                               data-toggle="modal"
                               data-target="#offline"><img src="" width="30"
                                                              alt="offline_method"> {{ __('pay_with') }}
                                <span></span></a>
                        </div>
                        </form>

                        <div class="mx-auto w_40 payment_btns d-none paypal_btn"
                             id="paypal-button-container"></div>
                        <form name="jsform" class="d-none jazz_cash_btn payment_btns" action="{{ $jazz_url }}"
                              method="POST">
                            @foreach($jazz_data as $key=> $data)
                                <input type="hidden" name="{{ $key }}"
                                       value="{{ $data }}">
                            @endforeach
                            <button type="submit" class="btn btn-primary jazz_btn">{{ __('pay_with_jazzCash') }}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div><!-- /.row -->
    </div>
</section><!-- /.shopping-cart -->

@if(settingHelper('stripe_key'))
    <div class="modal fade" id="stripe_modal" tabindex="-1" aria-labelledby="stripe_modal"
         aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('pay_with_stripe') }}</h5>
                    <button type="button" class="close modal_close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <form action="{{ url('api/complete-order') }}" method="post" id="payment-form">@csrf
                        <div class="row">
                            <input type="hidden" name="payment_type" value="stripe">
                            <input type="hidden" name="amount" value="{{ $orders->sum('total_payable') }}">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="text" name="name" class="form-control" required
                                           placeholder="{{ __('name') }}">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="text" name="email" class="form-control" required
                                           placeholder="{{ __('email') }}">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="text" name="phone" class="form-control" required
                                           placeholder="{{ __('phone') }}">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <div class="card-body">
                                        <div id="card-element">
                                        </div>
                                        <div id="card-errors" class="text-danger" role="alert"></div>
                                    </div>
                                </div>
                                <div class="card-footer text-center">
                                    <button class="btn btn-primary form_submit stripe_form_btn" id="stripe_btn"
                                            type="submit">{{ __('pay') }} {{ get_price($orders->sum('total_payable')) }}</button>
                                    <button class="btn btn-primary d-none loading" type="button" disabled>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span class="sr-only"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endif

<div class="modal fade" id="offline" tabindex="-1" aria-labelledby="offline_modal"
     aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ __('pay_with') }} <span></span></h5>
                <button type="button" class="close modal_close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="offline_form" id="offline_form">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label>Upload File</label>
                                <div class="input-group">
                                    <div class="custom-file d-flex">
                                        <label class="upload-image form-control" for="upload-1">
                                            <input type="file" id="upload-1" name="file">
                                            <i id="upload-image">{{ __('upload_file') }}</i>
                                        </label>
                                        <label class="upload-image upload-text" for="upload-2">
                                            <input type="file" id="upload-2" name="file">
                                            <img src="{{ $default_assets['review_image'] }}" alt="file"
                                                 class="img-fluid">
                                            {{ __('upload') }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 instruction_body">
                            <label>{{ __('instructions') }}</label>
                            <div class="instruction"></div>
                        </div>
                        <div class="col-lg-12 text-center mt-3">
                            <button type="button" class="btn btn-primary form_submit" id="offline_submit">{{ __('proceed') }}</button>
                            <button class="btn btn-primary d-none loading" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span class="sr-only"></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div><!-- /.modal-body -->
        </div>
    </div>
</div>




<input type="hidden" class="total_amount" value="{{ $orders->sum('total_payable') }}">
<input type="hidden" class="trx_id" value="{{ $trx_id }}">
<input type="hidden" class="code" value="{{ $code }}">
<input type="hidden" class="url" value="{{ url('/') }}">
<input type="hidden" class="auth_user" value="{{ authUser() }}">
<input type="hidden" class="is_sslcommerz_sandbox_mode_activated" value="{{ settingHelper('is_sslcommerz_sandbox_mode_activated') == 1 }}">
<input type="hidden" class="payment_success_url" value="{{ route('api.payment.success') }}">
<input type="hidden" id="stripe_key" value="{{ settingHelper('stripe_key') }}">

<script type="text/javascript" src="{{ static_asset('admin/js/jquery-3.3.1.min.js') }}"></script>
<script>
    window.url ='';
    window.base_url                 = $('.url').val();
    window.amount                   = $('.total_amount').val();
    window.trx_id                   = $('.trx_id').val();
    window.code                     = $('.code').val();
    window.user                     = $('.auth_user').val();
    window.ssl_sandobx_activated    = $('.is_sslcommerz_sandbox_mode_activated').val();
    window.token                    = '{{ $token }}';
</script>
<script type="text/javascript" src="{{ static_asset('admin/js/popper.min.js') }}"></script>
<script type="text/javascript" src="{{ static_asset('admin/js/bootstrap.min.js') }}"></script>
@if(settingHelper('is_paypal_activated') == 1)
    <script data-namespace="paypal_sdk"
            src="https://www.paypal.com/sdk/js?client-id={{ settingHelper('paypal_client_id') }}&currency=USD"></script>
    <script src="{{ static_asset('frontend/js/paypal.js') }}"></script>
@endif
@if(settingHelper('is_stripe_activated') == 1)
    <script src="https://js.stripe.com/v3/"></script>
    <script src="{{ static_asset('frontend/js/stripe.js') }}"></script>
@endif

@if(settingHelper('is_sslcommerz_activated') == 1)
    <script src="{{ static_asset('frontend/js/ssl_commerze.js') }}"></script>
@endif
<script type="text/javascript" src="{{ static_asset('admin/js/toastr.min.js') }}"></script>

@if(settingHelper('is_razorpay_activated') == 1)
    <script>
        let myScript = document.createElement('script');

        myScript.setAttribute('type', 'text/javascript');
        myScript.setAttribute('language', 'javascript');
        myScript.setAttribute('data-key', '{{ settingHelper('razorpay_key') }}');
        myScript.setAttribute('data-amount', {{ round($orders->sum('total_payable') * 100 * $indian_currency->exchange_rate) }});
        myScript.setAttribute('data-name', '{{ settingHelper('system_name') }}');
        myScript.setAttribute('data-description', 'Razorpay');
        myScript.setAttribute('data-image', '{{ $dark_logo }}');
        myScript.setAttribute('data-prefill.name', '');
        myScript.setAttribute('data-prefill.email', '');
        myScript.setAttribute('data-prefill.address', '');
        myScript.setAttribute('data-theme.color', '{{ settingHelper('menu_background_color') }}');
        myScript.setAttribute('src', '{{ static_asset('frontend/js/razor_pay_checkout.js') }}');
        document.getElementById('razor_pay_btn_append').insertAdjacentElement('afterend', myScript);
    </script>
@endif
<script>
    (function ($) {
        'use strict';
        $(document).ready(function () {
            // Append script
            $(document).on('change', 'input[name="payment"]', function () {
                let val = $(this).val();
                $('.razorpay-payment-button').addClass('d-none');
                $('.payment_btns').addClass('d-none');
                $('.div_btns').removeClass('d-none');
                $('.order-total').removeClass('pb-2');

                let btn_selector = $('.'+val+'_btn');

                if(val)
                {
                    btn_selector.removeClass('d-none');
                }
                if (val == 'cash_on_delivery' || val == "pay_later" || val == "wallet") {
                    $('.confirm_btn').removeClass('d-none');
                    $('.order-total').removeClass('pb-2');
                }
                else if (val == 'razor_pay') {
                    $('.order-total').addClass('pb-2');
                    $('.razorpay-payment-button').show().removeClass('d-none');
                }
                else if (val == 'offline_method') {
                    let method = $(this).data('value');
                    $('.offline_method_btn').removeClass('d-none');
                    $('.'+val+'_btn img').attr('src',method.image);
                    $('.'+val+'_btn span').text(method.name);
                    $('#offline .modal-title span').text(method.name);
                    if(method.instructions)
                    {
                        $('.instruction_body').show();
                        $('.instruction_body .instruction').html(method.instructions);
                    }
                    else{
                        $('.instruction_body').hide();
                    }

                }

            });
            $(document).on('click','.form_submit',function (){
                let check = $(this).hasClass("stripe_form_btn");
                if(check)
                {
                    let name = $('input[name = "name"]').val();
                    let email = $('input[name = "email"]').val();
                    let phone = $('input[name = "phone"]').val();

                    if(name && email && phone)
                    {
                        $(this).addClass('d-none');
                        $(this).siblings('.loading').removeClass('d-none');
                    }
                }
                else{
                    $(this).addClass('d-none');
                    $(this).siblings('.loading').removeClass('d-none');
                }

            });
            $(document).on('click','#cod_n_pay_later_submit,#wallet_submit,#offline_submit',function (e){
                e.preventDefault();
                let payment_type = $('input[name="payment"]:checked').val();
                let type = $(this).data('type');
                $('.payment_btns').addClass('d-none');

                if(type && type == 'wallet')
                {
                    payment_type = 'wallet'
                }

                let form = document.getElementById('offline_form');
                let formData = new FormData(form);

                if(window.user)
                {
                    let method = $('input[name="payment"]:checked').data('value');
                    formData.append('payment_type',payment_type);
                    formData.append('trx_id',window.trx_id);
                    formData.append('code',window.code);
                    formData.append('token',window.token);
                    if (payment_type == 'offline_method')
                    {
                        formData.append('id',method.id);
                    }
                }
                else{
                    formData.append('payment_type',payment_type);
                    formData.append('trx_id',window.trx_id);
                    formData.append('code',window.code);
                    formData.append('guest',1);
                }

               $.ajax({
                   type : 'POST',
                   url  : '{{ url('api/complete-order') }}',
                   processData: false,
                   contentType: false,
                   data : formData,
                   success : function (response){
                       $('.form_submit').removeClass('d-none');
                       $('.loading').addClass('d-none');
                       if (response.error) {
                           toastr.error(response.error);
                       } else {
                           window.location.href = '{{ route('api.payment.success') }}';
                           toastr.success(response.success);
                       }
                   },
                   error : function (response){
                       toastr.error(response.error);
                       $('.form_submit').removeClass('d-none');
                       $('.loading').addClass('d-none');
                   }
               })
            });

        });
    })(jQuery);
</script>
</body>
</html>
