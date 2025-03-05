    int findUnion(vector<int>& a, vector<int>& b) {
        
        int max1 = *max_element(a.begin(),a.end());
        int max2 = *max_element(b.begin(),b.end());
        int maxm = max(max1,max2);
        
         vector<int> arr(maxm + 1, 0);
          
         for( int i = 0; i < a.size(); i++)
         arr[a[i]]++;
         
         for(int i = 0; i < b.size(); i++)
         arr[b[i]]++;
         
         int cnt = 0;
         
         for ( int i = 0; i <= maxm ; i++){
             if ( arr[i] >= 1)
             cnt++;
         }
         
         return cnt;
         
    }
