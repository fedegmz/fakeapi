<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
        //get user id from url
        $userId = $this->segment(4);
        $userIds = $this->route('id');
        
        $rules['name'] = $userId ? ['string', 'max:255'] : ['required', 'string', 'max:255'];
        $rules['email'] = $userId ? ['string', 'email', 'max:255', Rule::unique('users')->ignore($userIds)] : ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($userIds)];
        $rules['password'] = $userId ? ['string', 'min:8', 'confirmed'] : ['required', 'string', 'min:8', 'confirmed'];
        $rules['profile_photo_path'] = ['nullable', 'string', 'max:255'];

        return $rules;
    }

    protected function  failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'status' => 422,
            'message' => 'Validation error',
            'errors' => $validator->errors(),
        ], 422));
    }
}
