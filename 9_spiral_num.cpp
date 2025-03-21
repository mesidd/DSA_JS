#include<iostream>
using namespace std;

int main(){

  int r,c;
  cin >> r >> c;
  int rvalue, cvalue, value;

  rvalue = r % 2 == 0 ? r * r : (r-1) * (r-1) + 1 ;
  cvalue = c % 2 != 0 ? c * c : (c-1) * (c-1) + 1 ;

  // cout << rvalue << " " << cvalue << endl;

  if ( r > c ){
    value = r % 2 == 0 ? ( rvalue - c + 1 ) : rvalue + c ;
  }
  else {
    value = c % 2 == 0 ? ( cvalue + r - 1 ) : cvalue - r + 1 ;
  }

  cout << value << endl ;

}
