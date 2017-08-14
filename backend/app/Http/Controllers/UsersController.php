<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

class UsersController extends Controller
{

  public function signup(Request $request)
  {
      $users = User::where('email', $request->email)->first();
      if ($users)
      {
          return response()->json([
                  'success' => false,
                  'message' => "Email already Registered!"
              ], 500);
      } else {
          $user = new User();
          if ($request->password==$request->cnf_password)
          {
              // Request a new data using the requst data
              $user->name = $request->name;
              $user->email = $request->email;
              $user->password = bcrypt($request->password);
              // Save if to the database
              $user->save();
              // Redirect to the homepage
              return response()->json([
                  'success' => true,
                  'message' => "Successfully Registered!"
              ], 200);
          } else {
              return response()->json([
                  'success' => false,
                  'message' => "Password did not Match!"
              ], 500);
          }
      }
  }

  public function signin(Request $request)
  {
      /** Attempt to authenticate the user */
      if ( auth()->attempt(request(['email','password'])) ) {
          return response()->json([
              'success' => true,
              'message' => "User Logged In!"
          ], 200);
      } else {
          return response()->json([
              'success' => false,
              'message' => "Invalid Credentials!"
          ], 500);
      }

  }

  public function signout()
  {
      if(Auth::logout()) {
        return response()->json([
            'success' => true,
            'message' => "User Logged Out!"
        ], 200);
      } else {
        return response()->json([
            'success' => false,
            'message' => "User Could Not Log Out!"
        ], 500);
      }
  }

}
