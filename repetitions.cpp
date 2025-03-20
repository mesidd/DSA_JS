#include<iostream>
#include<string>
using namespace std;
int main(){
 string s;
 cin >> s;
 int max = 1, i = 0 ;
 char value ;
 int n = s.size();

 while ( i < n){
  int count = 1;
  char temp = s[i];
  int start = s[i+1];

  while(temp == s[i+1]){
    i++;
    count ++;
  }
  if ( count > max ){
    max = count;
    value = temp;
  }
  i++;
 }
cout << max << endl;
}
