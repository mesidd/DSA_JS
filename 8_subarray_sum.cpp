    int maxSubarraySum(vector<int> &arr) {
        int n = arr.size();
        vector<int> newarr(n,0);
        int sum = 0;
        int maxm = arr[0];
        
        for ( int i = 0; i < n ; i++){
            sum += arr[i];
            maxm = max(maxm,sum);
            
            if (sum < 0 )
            sum = 0;
        }
        
        return maxm;
    }
