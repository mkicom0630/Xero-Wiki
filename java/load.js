
public class Example {
  public static void main(String[] args) {


var temp; 
var temp0; 

function input(){
var input = document.getElementById("input").value; 
temp0 = input;
temp = "doc\\" + temp0 + ".html";
    File f = new File(temp);

    // ���� ���� ���� �Ǵ�
    if (f.isFile()) {
      location.href=temp;
    }
    else {
      


}
    }
  }
}