#include<iostream>
#include<string>
using namespace std;
int main(){
int n;
cin >> n;
vector<int> arr;
for( int i = 0; i < n ; i++)
{
  int a;
  cin >> a;
  arr.push_back(a);
}
int count = 0;
for ( int i = 1; i < n; i++){
  int temp = arr[i-1];
  if(arr[i] < temp ){
    count += ( temp - arr[i] );
    arr[i] = temp;
  }
}
cout << count << endl ;
}
