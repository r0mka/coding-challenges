#include <iostream>


std::string reverseStr(std::string inputStr){
   std::string outputStr;
   for (int i = inputStr.length() - 1; i >= 0 ; i--) {
       outputStr +=  inputStr[i];
   } 

   return outputStr;
}

int main() {
    std::cout << "OUTPUT: " <<  reverseStr("roman") << std::endl;

}