<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class JwtRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $tknRefresh = $this->segment(4) == "refresh-token" ? ['required', 'string'] : ['string'];

        $rules['email'] = ['required', 'email'];
        $rules['password'] = ['required', 'string', 'min:6'];
        $rules['refreshTkn'] = $tknRefresh;

        return $rules;
    }
    
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'status' => 422,
            'message' => 'Validation error',
            'errors' => $validator->errors(),
        ], 422));
    }
    
}
