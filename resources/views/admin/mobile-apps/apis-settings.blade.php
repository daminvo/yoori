@extends('admin.partials.master')
@section('title')
    {{ __('Mobile Apps') }}
@endsection
@section('mobile_apps')
    active
@endsection
@section('apis_settings_active')
    active
@endsection
@section('apis_settings')
    active
@endsection

@section('main-content')
    <section class="section">
        <div class="section-body">
            <h2 class="section-title">{{ __('Mobile Apps') }}</h2>
            <div id="output-status"></div>
            <div class="row">
                @include('admin.mobile-apps.sidebar')
                <div class="col-md-9 col-sm">
                    <div class="card" id="settings-card">
                            <div class="card-header">
                                <h4>{{ __('APIs Settings') }}</h4>
                            </div>
                            <div class="col-md-10 middle card-body card-body-paddding">
                            <form action="{{route('mobile.apps.settings.update')}}" method="post" enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                <div class="form-group">
                                    <label for="api_server_url" class="form-control-label">{{ __('API Server URL') }}</label>
                                    <input type="text" name="api_server_url" value="{{ url('/api') }}" class="form-control" id="api_server_url">
                                    @if ($errors->has('api_server_url'))
                                        <div class="invalid-feedback">
                                            <p>{{ $errors->first('api_server_url') }}</p>
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="api_key_app" class="form-control-label">{{ __('API Key for App') }}</label>
                                    <div class="input-group">
                                        <input type="text" name="api_key_app" id="api_key_app"
                                               value="{{ old('api_key_app') ? old('api_key_app') : settingHelper('api_key_app') }}" class="form-control"
                                               placeholder="{{ __('ziwkB3lsldkfj') }}">
                                        <div class="input-group-append barcode">
                                            <div class="input-group-text">
                                                <i class="bx bx-refresh"></i>
                                            </div>
                                        </div>
                                        @if ($errors->has('api_key_app'))
                                            <div class="invalid-feedback">
                                                <p>{{ $errors->first('api_key_app') }}</p>
                                            </div>
                                        @endif
                                    </div>
                                    <div class="form-group text-right mt-3">
                                        <button type="submit" class="btn btn-outline-primary" tabindex="4">{{ __('Update') }}</button>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                     </div>
                </div>
           </div>
    </section>
@endsection
