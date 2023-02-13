@extends('admin.partials.master')
@section('google_services_active')
    active
@endsection
@section('setup')
    active
@endsection
@section('google_services')
    active
@endsection
@section('title')
    {{ __('Google Service') }}
@endsection
@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Settings') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.system-setup.sidebar')
                <div class="col-md-9">
                    <div class="card email-card">
                        <div class="card-header">
                            <h4>{{ __('Google Searvice') }}</h4>
                        </div>
                        <div class="card-body col-md-10 middle">
                            <div class="section-title mt-0">{{ __('Google Analytics') }}</div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label class="custom-switch mt-2">
                                                <input type="checkbox"
                                                       name="custom-switch-checkbox" value="third-party-status-change/{{ 'is_google_analytics_activated' }}"
                                                       class="custom-switch-input status-change" {{ settingHelper('is_google_analytics_activated') == 1 ? 'checked' : ''}} />
                                                <span class="custom-switch-indicator"></span>
                                                <span class="custom-switch-description">{{ __('Activate') }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form action="{{ route('third.party.setting.update') }}" method="post" enctype="multipart/form-data">
                                @method('put')
                                @csrf
                                <div class="form-group">
                                    <label for="stripe_key">{{ __('Tracking ID') }}</label>
                                    <input type="text" class="form-control" name="google_tracking_id" id="google_tracking_id" value="{{ old('google_tracking_id') ? old('google_tracking_id') : settingHelper('google_tracking_id') }}"  placeholder="{{ __('Google Tracking Id') }}">
                                    @if ($errors->has('google_tracking_id'))
                                        <div class="invalid-feedback">
                                            {{ $errors->first('google_tracking_id') }}
                                        </div>
                                    @endif
                                </div>
                                <div class="text-md-right">
                                    <button class="btn btn-outline-primary">{{ __('Update') }}</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-body col-md-10 middle">
                            <div class="section-title mt-0">{{ __('Google reCaptcha') }}</div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label class="custom-switch mt-2">
                                                <input type="checkbox"
                                                       name="custom-switch-checkbox" value="third-party-status-change/{{ 'is_recaptcha_activated' }}"
                                                       class="custom-switch-input status-change" {{ settingHelper('is_recaptcha_activated') == 1 ? 'checked' : ''}} />
                                                <span class="custom-switch-indicator"></span>
                                                <span class="custom-switch-description">{{ __('Activate') }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form action="{{ route('third.party.setting.update') }}" method="post" enctype="multipart/form-data">
                                @method('put')
                                @csrf
                                <div class="form-group">
                                    <label for="recaptcha_Site_key">{{ __('Site Key') }}</label>
                                    <input type="text" class="form-control" name="recaptcha_Site_key" id="recaptcha_Site_key" value="{{ old('recaptcha_Site_key') ? old('recaptcha_Site_key') : settingHelper('recaptcha_Site_key') }}"  placeholder="{{ __('Site Key') }}">
                                    @if ($errors->has('recaptcha_Site_key'))
                                        <div class="invalid-feedback">
                                            {{ $errors->first('recaptcha_Site_key') }}
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="recaptcha_secret">{{ __('Secret') }}</label>
                                    <input type="text" class="form-control" name="recaptcha_secret" id="recaptcha_secret" value="{{ old('recaptcha_secret') ? old('recaptcha_secret') : settingHelper('recaptcha_secret') }}"  placeholder="{{ __('Secret') }}">
                                    @if ($errors->has('recaptcha_secret'))
                                        <div class="invalid-feedback">
                                            {{ $errors->first('recaptcha_secret') }}
                                        </div>
                                    @endif
                                </div>
                                <div class="text-md-right">
                                    <button class="btn btn-outline-primary">{{ __('Update') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
