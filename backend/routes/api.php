<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Data Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/sign-in', [
    'uses' => 'UsersController@signin',
    'as' => 'app.post.signin'
]);

Route::post('/sign-out', [
    'uses' => 'UsersController@signout',
    'as' => 'app.post.signout'
]);

Route::post('/sign-up', [
    'uses' => 'UsersController@signup',
    'as' => 'app.post.signup'
]);

Route::group(['middleware' => 'cors'], function () {
    Route::get('/get-data', [
        'uses' => 'DataController@getData',
        'as' => 'get.app.getData'
    ]);
    Route::post('/add-data', [
        'uses' => 'DataController@addData',
        'as' => 'get.app.addData'
    ]);
    Route::patch('/update-data/{id}', [
        'uses' => 'DataController@updateData',
        'as' => 'get.app.updateData'
    ]);
    Route::put('/update-data/{id}', [
        'uses' => 'DataController@updateData',
        'as' => 'get.app.updateData'
    ]);
    Route::delete('/delete-data/{id}', [
        'uses' => 'DataController@deleteData',
        'as' => 'get.app.deleteData'
    ]);
});
