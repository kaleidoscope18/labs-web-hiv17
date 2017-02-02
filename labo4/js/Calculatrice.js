 /**
 * Created by Nadia and Raphael on 2017-01-26.
 */

 function Calculatrice(number) {
     this.number = number;
     this.add = function(number) {
         this.number += number;
         return this;
     }
     this.sub = function(number) {
         this.number -= number;
         return this;
     }
     this.multiply = function(number) {
         this.number *= number;
         return this;
     }
     this.divide = function(number) {
         this.number /= number;
         return this;
     }
     this.sin = function() {
         this.number = Math.sin(this.number);
         return this;
     }
     this.cos = function() {
         this.number = Math.sin(this.number);
         return this;
     }
     this.factorial = function() {
         this.number = factorial(this.number);
         return this;
     }

     function factorial(num) {
         if (num > 1){
             return num * factorial(num - 1);
         }
         else if (num == 0 || num == 1) {
             return 1;
         }
         else {
             return NaN;
         }
     }
 };

