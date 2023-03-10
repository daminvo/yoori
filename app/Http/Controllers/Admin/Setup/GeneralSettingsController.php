<?php

namespace App\Http\Controllers\Admin\Setup;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Setup\GeneralSettingRequest;
use App\Http\Requests\Admin\Setup\OptimizationRequest;
use App\Http\Requests\Admin\UpdateServerRequest;
use App\Repositories\Interfaces\Admin\CurrencyInterface;
use App\Repositories\Interfaces\Admin\LanguageInterface;
use App\Repositories\Interfaces\Admin\SettingInterface;
use App\Repositories\Interfaces\Admin\ShippingInterface;
use App\Traits\UpdaterTrait;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GeneralSettingsController extends Controller
{
    use UpdaterTrait;
    private $lanuages;
    private $settings;
    private $currencies;

    public function __construct(LanguageInterface $languages, ShippingInterface $shipping, SettingInterface $settings, CurrencyInterface $currencies)
    {
        $this->lanuages         = $languages;
        $this->settings         = $settings;
        $this->currencies       = $currencies;
        $this->shipping       = $shipping;
    }
    public function index(){
        $currencies           = $this->currencies->all()->get();
        $countries            = $this->shipping->getAllCountries();
        $available_languages  = $this->lanuages->all()->orderBy('id','asc')->get();
        $timezones            = $this->settings->timezones();
        return view('admin.system-setup.general-settings',compact('available_languages','timezones', 'currencies','countries'));
    }

    public function update(GeneralSettingRequest $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->settings->update($request)):
            Toastr::success(__('Setting Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return redirect()->back();
        endif;
    }

    public function optimizationUpdate(OptimizationRequest $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->settings->update($request)):
            Toastr::success(__('Setting Updated Successfully'));
            return redirect()->back();
        else:
            Toastr::error(__('Something went wrong, please try again'));
            return redirect()->back();
        endif;
    }

    public function systemName(Request $request)
    {
        return settingHelper($request->title,$request->lang);
    }

    public function updateServerForm()
    {
//        foreach ($dirs as $dir) {
//            if (is_writable($dir)) {
//                echo $dir.' is writable.<br>';
//            } else {
//                echo $dir.' is not writable. Permissions may have to be adjusted.<br>';
//            }
//        }

        $response       = $this->checkForUpdate();
        return view('admin.settings.updater', compact('response'));
    }

    public function serverInfo()
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;
        return view('admin.settings.server-info');
    }

    public function updateSystem(UpdateServerRequest $request)
    {
        if (isDemoServer()):
            Toastr::info(__('This function is disabled in demo server.'));
            return redirect()->back();
        endif;

        if ($this->settings->updateServer($request)):
            return redirect()->back();
        else:
            return redirect()->back();
        endif;
    }

    public function downloadUpdate()
    {
        try {
            $response = $this->downloadUpdateFile();
            if ($response === true):
                $data['status'] = 'success';
            elseif(isset($response->status)):
                $data['status']  = 'error';
                $data['message'] = $response->message;
            elseif($response == 'extension_not_installed'):
                $data['status']  = 'error';
                $data['message'] = 'PHP ZipArchive extension is not installed.';
            else:
                $data['status']  = 'error';
                $data['message'] = __('Something went wrong, please try again');
            endif;
            return response()->json($data);
        } catch (\Exception $e) {
            $data['status']  = 'error';
            $data['message'] = __('Something went wrong, please try again');
        }

    }
}
