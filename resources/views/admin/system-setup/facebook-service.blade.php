@extends('admin.partials.master')
@section('facebook_services_active')
    active
@endsection
@section('setup')
    active
@endsection
@section('facebook_services')
    active
@endsection
@section('title')
    {{ __('Facebook Service') }}
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
                            <h4>{{ __('Facebook Searvice') }}</h4>
                        </div>
                        <div class="col-md-10 middle card-body card-body-paddding">
                            <div class="card-body col-md-10 middle">
                                <div class="section-title mt-0">{{ __('Facebook Pixel') }}</div>
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="custom-switch mt-2">
                                                    <input type="checkbox"
                                                           name="custom-switch-checkbox" value="third-party-status-change/{{ 'is_facebook_pixel_activated' }}"
                                                           class="custom-switch-input status-change" {{ settingHelper('is_facebook_pixel_activated') == 1 ? 'checked' : ''}} />
                                                    <span class="custom-switch-indicator"></span>
                                                    <span class="custom-switch-description">{{ __('Activate') }}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form action="{{ route('third.party.setting.update') }}" method="post"  enctype="multipart/form-data">
                                    @method('put')
                                    @csrf
                                    <div class="form-group">
                                        <label for="paypal_client_id">{{ __('Facebook Pixel ID') }}</label>
                                        <input type="text" class="form-control" name="facebook_pixel_id" id="facebook_pixel_id" value="{{ old('facebook_pixel_id') ? old('facebook_pixel_id') : settingHelper('facebook_pixel_id') }}" placeholder="{{ __('Facebook Pixel Id') }}">
                                        @if ($errors->has('facebook_pixel_id'))
                                            <div class="invalid-feedback">
                                                {{ $errors->first('facebook_pixel_id') }}
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
        </div>
    </section>
@endsection
