# Problem Statment : Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.

  void sort012(vector<int>& arr) {
        int a = 0, b = 0, c = 0;
        
        for( int i = 0; i < arr.size(); i++ ){
            if ( arr[i] == 0)
            a++;
            else if ( arr[i] == 1)
            b++;
            else
            c++;
        }
        
        for ( int i = 0 ; i < a ; i++)
        arr[i] = 0;
        
        for ( int i = a ; i < b+a; i++)
        arr[i] = 1;
    
        for ( int i = b+a ; i < arr.size(); i++ )
        arr[i] = 2;
    }
