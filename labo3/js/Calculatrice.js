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
         factorial(this.number);
         return this;
     }
     function factorial(number) {
         if (number > 1){
             this.number *= (number - 1);
             factorial(number - 1);
         }
     }
 };

