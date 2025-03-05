   void segregateElements(vector<int>& arr) {
         
         vector<int> pos,neg;
         
         for ( int num : arr ){
             if( num >= 0 )
             pos.push_back(num);
             else
             neg.push_back(num);
         }
         arr.clear();
         arr.insert(arr.end(),pos.begin(),pos.end());
         arr.insert(arr.end(),neg.begin(),neg.end());
    }
