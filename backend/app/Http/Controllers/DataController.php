<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Data;

class DataController extends Controller
{
  public function getData()
  {
      $data = Data::all();
      return response()->json([
                'statusIs' => true,
                'data' => $data
            ]);
  }

  public function addData(Request $request)
  {
      $data = new Data();
      $findData = Data::where('user_id', $request->user_id)->first();

      if($findData) {
        $data->item = $request->item;
        $data->amount = $request->amount;
        $data->user_id = $request->user_id;
        /** Saving Data to Database*/
        if($data->save()) {
            return response()->json([
                'statusIs' => true,
                'error' => "New Data Added!"
            ]);
        } else {
            return response()->json([
                'statusIs' => false,
                'error' => "Something Unexpected Happened!"
            ]);
        }

      } else {
          return response()->json([
              'success' => false,
              'error' => "User Not Found!"
          ]);
      }
  }

  public function updateData(Request $request, $id)
  {

      $findData = Data::find($id);
      if($findData) {
          $findData->item = $request->item;
          $findData->amount = $request->amount;
          /** Saving Data to Database*/
          if($findData->update()) {
              return response()->json([
                  'success' => true,
                  'message' => "Data Updated!"
              ], 200);
          } else {
                  return response()->json([
                  'success' => false,
                  'message' => "Something Unexpected Happened!"
              ], 500);
          }
      } else {
          return response()->json([
              'success' => false,
              'message' => "Data Not Found!"
          ], 500);
      }
  }
  public function deleteData($id)
  {
       $findData = Data::find($id);
       if($findData){
         if($findData->delete()){
            return response()->json([
                'success' => true,
                'message' => "Data Deleted!"
            ], 200);
         } else {
            return response()->json([
                'success' => false,
                'message' => "Something Unexpected Happened!"
            ], 500);
         }
       } else {
             return response()->json([
                 'success' => false,
                 'message' => "Data Not Found!"
             ], 500);
       }

  }

}
