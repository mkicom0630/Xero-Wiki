
public class Example {
  public static void main(String[] args) {


var temp; 
var temp0; 

function input(){
var input = document.getElementById("input").value; 
temp0 = input;
temp = "doc\\" + temp0 + ".html";
    File f = new File(temp);

    // 파일 존재 여부 판단
    if (f.isFile()) {
      location.href=temp;
    }
    else {
      


}
    }
  }
}