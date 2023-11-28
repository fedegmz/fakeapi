<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class CategoryRequest extends FormRequest
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
        //get category id from url
        $categoryId = $this->segment(4);
        $rulesAll = ['required', 'string', 'max:255'];
        $rulesAll = $categoryId ? array_diff($rulesAll, ['required']) : $rulesAll;
        
        $rules['name'] = $rulesAll;
        $rules['image'] = $rulesAll;
        
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
