const exerciseTopic =[
    {
        "week":"tuan1",
        "excersice":1,
        "code":"package xuanhieu.tuan1;\n"+
        "import java.util.*;\n"+
        "public class bai1 {\n"+
            "public static void main(String[] args) {\n"+
                "System.out.println(Họ tên: Vương Xuân Hiệu );\n"+
                "System.out.println(MSSV: 20181063);\n"+
                //Bai1: Liệt kê hợp số < 100
                "List<Integer> nguyento = hopto(100);\n"+
                "System.out.println(Hợp số < 100 là: );\n"+
                "for(int i = 0 ; i < nguyento.size(); i++){\n"+
                    "System.out.print(nguyento.get(i)+' ');\n"+
                "}\n"+
            "}\n"+
            "public static boolean nhap(int n){\n"+
                "if(n<0){\n"+
                    "return true;\n"+
                "}\n"+
                "else{\n"+
                    "return false;\n"+
                "}\n"+
            "}\n"+
            "public static List<Integer> hopto(int n){\n"+
                "List<Integer>nt = new ArrayList<>();\n"+
                "for(int i =2 ; i <n;i++){\n"+
                    "boolean KT= false;\n"+
                    "for(int j = 2; j <i ; j++){\n"+
                        "if(i%j ==0){\n"+
                            "KT = true;\n"+
                            "break;\n"+
                        "}\n"+
                    "}\n"+
                    "if(KT){\n"+
                        "nt.add(i);\n"+
                    "}\n"+
                "}\n"+
                "return nt;\n"+
            "}\n"+
        "}\n",
        "topic":"In ra màn hình tất cả các hợp số <100"
    },
    {
        "week":"tuan1",
        "excersice":2,
        "code":"package xuanhieu.tuan1;\n"+
        "import java.util.*;\n"+
        "public class bai2 {\n"+
            "public static void main(String[] args) {\n"+
                "System.out.println(Họ tên: Vương Xuân Hiệu);\n"+
                "System.out.println(MSSV: 20181063);\n"+
                //Bai2: Liệt kê số nguyên tố < 20
                "List<Integer> nguyento = songuyento(20);\n"+
                "System.out.println(Số nguyên tố < 20 là: );\n"+
                "for(int i = 0 ; i < nguyento.size(); i++){\n"+
                    "System.out.print(nguyento.get(i)+' ');\n"+
                "}\n"+
            "}\n"+
            "public static boolean nhap(int n){"+
                "if(n<0){"+
                    "return true;"+
                "}"+
                "else{"+
                    "return false;"+
                "}"+
            "}"+
            "public static List<Integer> songuyento(int n){"+
                "List<Integer>nt = new ArrayList<>();"+
                "for(int i =2 ; i <n;i++){"+
                    "boolean KT= true;"+
                    "for(int j = 2; j <i ; j++){"+
                        "if(i%j ==0){"+
                            "KT = false;"+
                            "break;"+
                        "}"+
                    "}"+
                    "if(KT){"+
                        "nt.add(i);"+
                    "}"+
                "}"+
                "return nt;"+
            "}"+
        "}",
        "topic":"In ra màn hình 20 số nguyên tố đầu tiên"
    },
    {
        "week":"tuan1",
        "excersice":3,
        "code":"package xuanhieu.tuan1;\n"+
        "import  java.util.*;\n"+
        "public class bai3 {\n"+
        
            "public static void main(String[] args) {\n"+
                "System.out.println(Họ tên: Vương Xuân Hiệu );\n"+
                "System.out.println(MSSV: 20181063');\n"+
                //Bai3: Liệt kê số nguyên tố từ 1000 đến 2000
                "List<Integer> nguyento = songuyento(2000);\n"+
                "System.out.println(Số nguyên tố từ 1000 đến 2000 là: '');\n"+
                "for(int i = 0 ; i < nguyento.size(); i++){\n"+
                    "System.out.print(nguyento.get(i)+' ');\n"+
                "}\n"+
            "}\n"+
            "public static boolean nhap(int n){\n"+
                "if(n<0){\n"+
                    "return true;\n"+
                "}\n"+
                "else{\n"+
                    "return false;\n"+
                "}\n"+
            "}\n"+
            "public static List<Integer> songuyento(int n){\n"+
                "List<Integer>nt = new ArrayList<>();\n"+
                "for(int i =1001 ; i <n;i++){\n"+
                    "boolean KT= true;\n"+
                    "for(int j = 2; j <i ; j++){\n"+
                        "if(i%j ==0){\n"+
                            "KT = false;\n"+
                            "break;\n"+
                        "}\n"+
                    "}\n"+
                    "if(KT){\n"+
                        "nt.add(i);\n"+
                    "}\n"+
                "}\n"+
                "return nt;\n"+
            "}\n\n"+
        
        "}",
        "topic":"In ra màn hình tất cả các số nguyên tố từ 1000 đến 2000"
    },
    {
        "week":"tuan1",
        "excersice":4,
        "code":"package xuanhieu.tuan1;\n"+

        "public class bai4 {\n"+
            "public static void main(String[] args) {\n"+
                "System.out.println('Họ tên: Vương Xuân Hiệu ');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                //Bai4  : Các số <100 chia hết cho 3 và 7
                "for(int i = 0 ; i < 100 ; i++){\n"+
                    "if(i%3==0 && i%7==0){\n"+
                        "System.out.println('Các số < 100 chia hết cho 3 và 7 là:'+i);\n"+
                    "}\n"+
                "}\n"+
            "}\n"+
        "}",
        "topic":"In ra màn hình các số <100 và chia hết cho 3,7"
    },
    {
        "week":"tuan1",
        "excersice":5,
        "code":"package xuanhieu.tuan1;\n"+

        "public class bai5 {\n"+
            "public static void main(String[] args) {\n"+
                "System.out.println('Họ tên: Vương Xuân Hiệu ');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                //Bai5 : Các số nằm giữa 1000 và 2000 đồng thời chia hết cho 3,7,5;
                "for(int i = 1001 ; i< 2000 ; i++){\n"+
                    "if(i%3==0 && i%7==0 && i%5==0){\n"+
                        "System.out.println('Các số nằm giữa 1000 và 2000 chia hết cho 3,7,5 là:'+i);\n"+
                    "}\n"+
                "}\n"+
            "}\n"+
        "}",
        "topic":"In ra màn hình các số nằm giữa 1000 và 2000 đồng thời chia hết cho 3,5,7"
    },
    {
        "week":"tuan1",
        "excersice":6,
        "code":"package xuanhieu.tuan1;\n"+

        "public class bai6 {\n"+
            "public static void main(String[] args) {\n"+
                "System.out.println('Họ tên: Vương Xuân Hiệu ');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                //Bai6 : In ra màn hình 5 số hoàn hảo đầu tiên
                "for(int i = 1 ; i < 10000; i++) {\n"+
                    "int sum = 0;\n"+
                    "for(int j = 1 ; j <= i/2;j++){\n"+
                        "if(i%j==0){\n"+
                            "sum+=j;\n"+
                        "}\n"+
                    "}\n"+
                    "if(i==1){\n"+
                        "System.out.println('Số hoàn hảo là :'+ i);\n"+
                    "}\n"+
                    "else if(sum == i){\n"+
                        "System.out.println('Số hoàn hảo là:'+i);\n"+
                    "}\n"+
                "}\n"+
            "}\n"+
        "}",
        "topic":"In ra màn hình 5 số hoàn hảo đầu tiên '('Số hoàn hảo là số có tổng bằng các ước số của mình kể cả 1"
    },
    {
        "week":"tuan1",
        "excersice":7,
        "code":"package xuanhieu.tuan1;\n"+

        "public class bai7 {\n"+
        
        
            "public static void main(String[] args) {\n"+
                "System.out.println('Họ tên: Vương Xuân Hiệu ');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                //Bai7: Trong các số tự nhiên < 100 hãy đếm:
                "System.out.println('Kết quả: ');\n"+
                "int count0=0;\n"+
                "int count1=0;\n"+
                "int count2=0;\n"+
                "int count3=0;\n"+
                "for(int i=0;i<=100;i++){\n"+
                    "if(i%5==0){\n"+
                        "count0= count0+ 1;\n"+
        
                    "}\n"+
                "}\n"+
                "System.out.println('Số các số tự nhiên chia hết cho 5 là:\n'+count0);\n"+
                "for(int i=0;i<100;i++){\n"+
                    "if(i%5==1){\n"+
                        "count1=count1+1;\n"+
                    "}\n"+
                "}\n"+
                "System.out.println(Số tự nhiên chia 5 dư 1: \n'+count1);\n"+
                "for(int i=0;i<100;i++){\n"+
                    "if(i%5==2){\n"+
                        "count2=count2+1;\n"+
                    "}\n"+
                "}\n"+
                "System.out.println('Số tự nhiên chia 5 dư 2: '+count2);\n"+
                "for(int i=0;i<100;i++){\n"+
                    "if(i%5==3){\n"+
                        "count3=count3+1;\n"+
                    "}\n"+
                "}\n"+
                "System.out.println('Số tự nhiên chia 5 dư 3:'+count3);\n"+
            "}\n"+
        "}",
        "topic":"Trong các số tự nhiên <=100 hãy đếm xem có bao nhiêu số\n"+
        "a. Chia hết cho 5\n"+
        "b. Chia 5 dư 1\n"+
        "c. Chia 5 dư 2\n"+
        "d. Chia 5 dư 3"
    },
    {
        "week":"tuan1",
        "excersice":8,
        "code":"package xuanhieu.tuan1;\n"+

        "import java.util.Scanner;\n"+
        
        "public class bai8 {\n"+
        
            "public static void main(String[] args) {\n"+
                "System.out.println('Họ tên: Vương Xuân Hiệu ');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                //Bai8: Cho số tự nhiên N, tìm và in ra ước số nguyên tố nhỏ nhất của N
                "System.out.println('Kết quả: ');\n"+
                "System.out.print('Nhap n ='');\n"+
                "int n = nhap();\n"+
                "inSNTNhoNhat(n);\n"+
            "}\n"+
            "public static int nhap() {\n"+
                "Scanner input = new Scanner(System.in);\n"+
                "boolean check = false;\n"+
                "int n = 0;\n"+
                "while (!check) {\n"+
                    "System.out.print('');\n"+
                    "try {\n"+
                        "n = input.nextInt();\n"+
                        "check = true;\n"+
                    "} catch (Exception e) {\n"+
                        "System.out.println(Ban phai nhap so!Hay nhap lai...');\n"+
                        "input.nextLine();\n"+
                    "}\n"+
                "}\n"+
                "return (n);\n"+
            "}\n"+
        
            "public static boolean checkSNT(int n) {\n"+
                "if (n > 1) {\n"+
                    "for (int i = 2; i <= Math.sqrt(n); i++) {\n"+
                        "if (n % i == 0) {\n"+
                            "return false;\n"+
                        "}\n"+
                    "}\n"+
                    "return true;\n"+
                "} else {\n"+
                    "return false;\n"+
                "}\n"+
            "}\n"+
        
            "public static void inSNTNhoNhat(int n) {\n"+
                "int count = 0;\n"+
                "System.out.print('\nUoc nguyen to nho nhat cua ' + n + ' la: ');\n"+
                "for (int i = 1; i <= n; i++) {\n"+
                    "if (n % i == 0 && (checkSNT(i))) {\n"+
                        "System.out.println(i);\n"+
                        "count++;\n"+
                    "}\n"+
                    "if (count == 1) {\n"+
                        "return;\n"+
                    "}\n"+
                "}\n"+
            "}\n"+
        "}",
        "topic":"Cho số tự nhiên N bất kỳ '('đã gán trước đó')', tìm và in ra ước số nguyên tố nhỏ nhất của N"
    },
    {
        "week":"tuan1",
        "excersice":9,
        "code":"package xuanhieu.tuan1;\n"+

        "import java.util.Scanner;\n"+
        "import java.util.*;\n"+
        "public class bai9 {\n"+
            "public static void main(String[] args) {\n"+
                "System.out.println('Họ tên: Vương Xuân Hiệu ');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                //Bai9: Triển khai thành tích các số nguyên tố
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập N:');\n"+
                "int n = scanner.nextInt();\n"+
                "while (nhap(n)){\n"+
                    "System.out.println('Nhập sai vui lòng nhập lại');\n"+
                    "System.out.println('Nhập N:');\n"+
                    "n = scanner.nextInt();\n"+
                "}\n"+
                "List<Integer> nguyento = songuyento(n);\n"+
                "List<Integer>trienkhai = new ArrayList<>();\n"+
                "int count=0;\n"+
                "int length = n;\n"+
                "boolean ab = true;\n"+
                "do{\n"+
                    "if(n==1){\n"+
                        "ab=false;\n"+
                    "}\n"+
                    "if(n% nguyento.get(count)==0){\n"+
                        "n = n/nguyento.get(count);\n"+
                        "trienkhai.add(nguyento.get(count));\n"+
                    "}\n"+
                    "else{\n"+
                        "count++;\n"+
                    "}\n"+
                "}while(ab);\n"+
                "System.out.print(length+' = ');\n"+
                "for(int i = 0 ; i < trienkhai.size();i++){\n"+
                    "System.out.print(trienkhai.get(i) + '');\n"+
                "}\n"+
            "}\n"+
            "public static boolean nhap(int n){\n"+
                "if(n<4){\n"+
                    "return true;\n"+
                "}\n"+
                "else{\n"+
                    "return false;\n"+
                "}\n"+
            "}\n"+
            "public static List<Integer> songuyento(int n){\n"+
                "List<Integer>nt = new ArrayList<>();\n"+
                "for(int i =2 ; i <n;i++){\n"+
                    "boolean KT= true;\n"+
                    "for(int j = 2; j <i ; j++){\n"+
                        "if(i%j ==0){\n"+
                            "KT = false;\n"+
                            "break;\n"+
                        "}\n"+
                    "}\n"+
                    "if(KT){\n"+
                        "nt.add(i);\n"+
                    "}\n"+
                "}\n"+
                "return nt;\n"+
            "}\n"+
        "}",
        "topic":"Cho số tự nhiên N>1 bất kỳ (đã gán trước đó). In ra khai triển thành tích các số nguyên tố tính từ nhỏ đến lớn VD: 9=3*3,12=2*2*3"
    },
    {
        "week":"tuan1",
        "excersice":10,
        "code":"package xuanhieu.tuan1;\n"+

        "import java.util.Scanner;\n"+
        "import java.util.*;\n"+
        "public class bai10 {\n"+
        
            "public static void main(String[] args) {\n"+
                "System.out.println('Họ tên: Vương Xuân Hiệu ');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                //Bai10: Các ước số nguyên tố khác nhau của N
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập N:');\n"+
                "int n = scanner.nextInt();\n"+
                "while (nhap(n)){\n"+
                    "System.out.println('Nhập sai vui lòng nhập lại');\n"+
                    "System.out.println('Nhập N:');\n"+
                    "n = scanner.nextInt();\n"+
                "}\n"+
        
                "List<Integer> nguyento = songuyento(n);\n"+
                "List<Integer>trienkhai = new ArrayList<>();\n"+
                "int count=0;\n"+
                "int length = n;\n"+
                "boolean ab = true;\n"+
                "do{\n"+
                    "if(n==1){\n"+
                        "ab=false;\n"+
                    "}\n"+
                    "if(n% nguyento.get(count)==0){\n"+
                        "n = n/nguyento.get(count);\n"+
                        "trienkhai.add(nguyento.get(count));\n"+
                    "}\n"+
                    "else{\n"+
                        "count++;\n"+
                    "}\n"+
        
                "}while(ab);\n"+
                "for(int i = 0 ; i < trienkhai.size()-1;i++){\n"+
                    "for(int j =\ni+1;j< trienkhai.size();j++){\n"+
                        "if(trienkhai.get(i)==trienkhai.get(j)){\n"+
                            "trienkhai.set(j,0);\n"+
                        "}\n"+
                    "}\n"+
                "}\n"+
                "System.out.println('Các ước số nguyên tố khác nhau của: '+length+':');\n"+
                "for(int i = 0 ; i < trienkhai.size();i++){\n"+
                    "if(trienkhai.get(i)!=0){\n"+
                        "System.out.print(trienkhai.get(i)+' ');\n"+
                    "}\n"+
                "}\n"+
        
            "}\n"+
            "public static boolean nhap(int n){\n"+
                "if(n<0){\n"+
                    "return true;\n"+
                "}\n"+
                "else{\n"+
                    "return false;\n"+
                "}\n"+
            "}\n"+
            "public static List<Integer> songuyento(int n){\n"+
                "List<Integer>nt = new ArrayList<>();\n"+
                "for(int i =2 ; i <n;i++){\n"+
                    "boolean KT= true;\n"+
                    "for(int j = 2; j <i ; j++){\n"+
                        "if(i%j ==0){\n"+
                            "KT = false;\n"+
                            "break;\n"+
                        "}\n"+
                    "}\n"+
                    "if(KT){\n"+
                        "nt.add(i);\n"+
                    "}\n"+
                "}\n"+
                "return nt;\n"+
            "}\n"+
        "}",
        "topic":"Cho trước số tự nhiên N bất kỳ '('đã gán trước đó')'. In ra màn hình tất cả các ước số nguyên tố khác nhau của N."
    },
    {
        "week":"tuan1",
        "excersice":11,
        "code":"import java.util.Random;\n"+
        "import java.util.Scanner;\n"+
        "import java.util.*;\n"+
       "public class bai11 {\n"+
            "public static void main(String[] args) {\n"+
                "System.out.println('Họ tên: Vương Xuân Hiệu ');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                // Bai 11: Đổi chỗ ngẫu nhiên một vị trí dãy số cho trước.
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập dãy số:');\n"+
                "int n = scanner.nextInt();\n"+
                "String m = String.valueOf(n);\n"+
                "String []b = m.split('');\n"+
                "String luutru[] = new String[b.length];\n"+
                "Random random = new Random();\n"+
                "String[]after = manglucsau(b);\n"+
                "for(int i = 0 ; i  < b.length ; i++){\n"+
                    "int vitri = random.nextInt(after.length);\n"+
                    "luutru[i]=after[vitri];\n"+
                    "after[vitri]='0';\n"+
                    "after = manglucsau(after);\n"+
                "}\n"+
                "System.out.println('Danh sách lúc sau: ');\n"+
                "for(int i=0;i< luutru.length;i++){\n"+
                    "System.out.print(luutru[i]);\n"+
                "}\n"+
            "}\n"+
            "public static String[] manglucsau(String[]b){\n"+
                "List<String>a = new ArrayList<>();\n"+
                "for(int i= 0 ; i <b.length;i++){\n"+
                    "if(b[i]!='0'){\n"+
                        "a.add(b[i]);\n"+
                    "}\n"+
                "}\n"+
                "String after[] = new String[a.size()];\n"+
                "for(int i = 0 ; i < a.size();i++){\n"+
                    "after[i] = a.get(i);\n"+
                "}\n"+
                "return after;\n"+ 
            "}\n"+
        
        "}",
        "topic":" Viết chương trình tráo đổi ngẫu nhiên vị trí một dãy số cho trước. Để lấy một số int ngẫu nhiên từ 0 đến n-1 ta dùng lệnh int i = Random.nextInt(n);"
    },
    {
        "week":"tuan1",
        "excersice":12,
        "code":"import java.util.Scanner;\n"+

        "public class bai12 {\n"+
            "public static void main(String[] args) {\n"+
                "System.out.println('Họ tên: Vương Xuân Hiệu ');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                // Bai 12: Vẽ tam giác với độ cao cho trước.
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println(Nhập N='');\n"+
                "int n = scanner.nextInt();\n"+
                "while (nhap(n)){\n"+
                    "System.out.println('Nhập sai vui lòng nhập lại');\n"+
                    "System.out.println(Nhập N='');\n"+
                    "n = scanner.nextInt();\n"+
                "}\n"+
                "for(int i=1; i<=n; i++) {\n"+
                    "for(int j=1; j<=i; j++) {\n"+
                        "System.out.print('* ');\n"+
                    "}\n"+
                    "System.out.println('');\n"+
                "}\n"+
        
            "}\n"+
            "public static boolean nhap(int n){\n"+
                "if( (n>=2) && (n<=10)){\n"+
                    "return false;\n"+
                "}\n"+
                "else{\n"+
                    "return true;\n"+
                "}\n"+
            "}\n"+ 
        "}",
        "topic":"Viết chương trình nhập chiều cao h từ bàn phím, sau đó hiển thị các tam giác\n"+
        "hình sao có chiều cao h như dưới đây. Chú ý có kiểm tra điều kiện của h: 2<=h<=10. Nếuh nằm ngoài đoạn trên, yêu cầu người dùng nhập lại. '('cho lựa chọn in tam giác xuôi hoặc\n"+
        "ngược')'"
    },
    {/*------------------------------------------------------------------------------*/
        "week":"tuan1",
        "excersice":13,
        "code":"import java.util.Scanner;\n"+

        "public class Bai1 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 1: Tinh tong S = 1\n + 1/(\n1+2)\n + 1/(\n1+\n2+3)\n + 1/(\n1+\n2+\n3+..\n.+N)
                "System.out.println(Họ và tên: Vương Xuân Hiệu);\n"+
                "System.out.println('MSSV : 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập số:');\n"+
                "int n = scanner.nextInt();\n"+
                "float result =0;\n"+
                "float t =0;\n"+
                "for(int i=1 ; i <=n ; i++){\n"+
                    "t=t+i;\n"+
                    "result+=(float)(1/t);\n"+
                "}\n"+
                "System.out.println(result);\n"+
            "}\n"+
        "}",
        "topic":"Cho số tự nhiên N bất kỳ Tính tổng S=1+1/(1+2) + 1/(1+2+3) +…+ 1/(1+2+3+..+N)"
    },
    {
        "week":"tuan1",
        "excersice":14,
        "code":"import java.util.Scanner;\n"+

        "public class Bai2 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 2: Tinh tong S = 1\n + 1/2!\n + 1/3\n!+..\n.+1/N!
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
               "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập số:');\n"+
                "int n = scanner.nextInt();\n"+
                "float result =0;\n"+
                "int t =1;\n"+
                "int a=1;\n"+
                "for(int i=1 ; i <=n ; i++){\n"+
                    "t*=i;\n"+
                    "resul\nt+=(float)1/t;\n"+
                "}\n"+
                "System.out.println(result);\n"+
            "}\n"+
        "}",
        "topic":"Cho số tự nhiên N bất kỳ, tính tổng S= 1+ 1/2!+ 1/3! + …+ 1/N!"
    },
    {
        "week":"tuan1",
        "excersice":15,
        "code":"import java.util.Scanner;\n"+

        "public class Bai3 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 3: Tinh tong S = 1\n + 1/\n1+2!\n + 1/\n1+2\n!+3!\n + 1/(\n1+2\n!+3\n!+.\n.+N!)
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập số:');\n"+
                "int n = scanner.nextInt();\n"+
                "float result =0;\n"+
                "int t =0;\n"+
                "int a=1;\n"+
                "for(int i=1 ; i <=n ; i++){\n"+
                    "a*=i;\n"+
                    "t+=a;\n"+
                    "result+=(float)1/t;\n"+
                "}\n"+
                "System.out.println(result);\n"+
            "}\n"+
        "}",
        "topic":"Cho số tự nhiên N bất kỳ,tính tổng S=1+1/(1+2!) + 1/(1+2!+3!)+ ..+ 1/(1+2!+3!+..+N!)"
    },
    {
        "week":"tuan1",
        "excersice":16,
        "code":" import java.util.Scanner;\n"+

        "public class Bai4 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 4:Tính dãy số Fibonaxi
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập số:');\n"+
                "int n = scanner.nextInt();\n"+
                "int result = Fibonaxi(n);\n"+
                "System.out.println(result);\n"+
            "}\n"+
            "public static int Fibonaxi(int k){\n"+
                "if(k==1){\n"+
                    "return 1;\n"+
                "}\n"+
                "else if(k==0){\n"+
                    "return 0;\n"+
                "}\n"+
                "else{\n"+
                    "return Fibonaxi(k-1)+Fibonaxi(k-2);\n"+
                "}\n"+
            "}\n"+
        "}",
        "topic":"Dãy Fibonaxi 1, 2, 3, … F(k) = F(k-1) + F(k-2). Tính số Fibonaxi thứ N."
    },/*------------------------------------------------------------------------------*/
    {
        "week":"tuan2",
        "excersice":1,
        "code":"import java.util.*;\n"+
        "import java.util.ArrayList;\n"+
        "import java.util.Scanner;\n"+
        
        "public class bai1 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 1:Cho một dãy số tự nhiên, viết chương trình sắp xếp dãy này theo thứ tự giảm dần
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV : 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập độ dài mảng:');\n"+
                "int n = scanner.nextInt();\n"+
                "System.out.println('Nhập dãy số:');\n"+
                "List<Integer> c = new ArrayList<>();\n"+
                "for(int i = 0 ; i < n ; i++){\n"+
                    "int nhap = scanner.nextInt();\n"+
                    "c.add(nhap);\n"+
                "}\n"+
                "c.stream().sorted(new Comparator<Integer>() {\n"+
                    "@Override\n"+
                    "public int compare(Integer o1, Integer o2) {\n"+
                        "return o2.compareTo(o1);\n"+
                    "}\n"+
                "}).forEach(s-> System.out.print(s+' '));\n"+
            "}\n"+
        "}",
        "topic":"Cho một dãy số tự nhiên, viết chương trình sắp xếp dãy này theo thứ tự giảm dần."
    },
    {
        "week":"tuan2",
        "excersice":2,
        "code":"import java.util.Scanner;\n"+
        "import java.util.*;\n"+
        "public class bai2 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 2:Cho dãy số tự nhiên, in ra màn hình tất cả các số nguyên tố của dãy này.
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV : 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println(Nhập độ dài dãy số:');\n"+
                "int n = scanner.nextInt();\n"+
                "System.out.println('Nhập dãy số: ');\n"+
                "int b[] = new int[n];\n"+
                "for(int i = 0 ; i < n ; i++){\n"+
                    "int nhap = scanner.nextInt();\n"+
                    "b[i] = nhap;\n"+
                "}\n"+
                "List<Integer>c = new ArrayList<>();\n"+
                "for(int i = 0 ; i < b.length ; i++){\n"+
                    "if(isCheck(b[i])){\n"+
                        "c.add(b[i]);\n"+
                    "};\n"+
                "}\n"+
                "System.out.println('Số nguyên tố của dãy này là: );\n"+
                "c.stream().forEach(s-> System.out.print(s));\n"+
            "}\n"+
        
            "public static boolean isCheck(int input){\n"+
                "boolean KT = true;\n"+
                "if(input==1){\n"+
                    "KT=false;\n"+
                    "return KT;\n"+
                "}\n"+
                "for(int i=2; i<input;i++){\n"+
                    "if(input%i==0){\n"+
                        "KT=false;\n"+
                        "break;\n"+
                    "}\n"+
                "}\n"+
                "return KT;\n"+
            "}\n"+
        "}",
        "topic":"Cho dãy số tự nhiên, in ra màn hình tất cả các số nguyên tố của dãy này"
    },
    {
        "week":"tuan2",
        "excersice":3,
        "code":"import java.util.Scanner;\n"+
        "import java.util.*;\n"+
        "import java.util.stream.Collectors;\n"+
        
        "public class bai3 {\n"+
            //Bài 3 : Cho một dãy các số tự nhiên, tìm và in ra 1 giá trị min của dãy này và tất cả các
            //chỉ số ứng với giá trị min này
            "public static void main(String[] args){\n"+
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV : 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập độ dài của dãy:');\n"+
                "int n = scanner.nextInt();\n"+
                "List<Integer> b = new ArrayList();\n"+
                "System.out.println('Nhập dãy số : ');\n"+
                "for(int i= 0 ; i<n;i++){\n"+
                    "int nhap = scanner.nextInt();\n"+
                    "b.add(nhap);\n"+
                "}\n"+
                "b= b.stream().sorted(new Comparator<Integer>() {\n"+
                    "@Override\n"+
                    "public int compare(Integer o1, Integer o2) {\n"+
                        "return o1.compareTo(o2);\n"+
                    "}\n"+
                "}).collect(Collectors.toList());\n"+
                "System.out.println(b.get(0));\n"+
            "}\n"+
        "}",
        "topic":"Cho một dãy các số tự nhiên, tìm và in ra 1 giá trị min của dãy này và tất cả các chỉ số ứng với giá trị min này"
    },
    {
        "week":"tuan2",
        "excersice":4,
        "code":"import java.util.Scanner;\n"+
        "import java.util.*;\n"+
        "import java.util.stream.Collectors;\n"+
        
        "public class bai4 {\n"+
        
            "public static void main(String[] args) {\n"+
                // Bai 4:Cho một dãy các số tự nhiên, tìm và in ra 1 giá trị max của dãy này và tất cả các
                //    //chỉ số ứng với giá trị max này.
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV : 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập độ dài của dãy:');\n"+
                "int n = scanner.nextInt();\n"+
                "List<Integer> b = new ArrayList();\n"+
                "System.out.println('Nhập dãy số : ');\n"+
                "for (int i = 0; i < n; i++) {\n"+
                    "int nhap = scanner.nextInt();\n"+
                    "b.add(nhap);\n"+
                "}\n"+
                "b = b.stream().sorted(new Comparator<Integer>() {\n"+
                    "@Override\n"+
                    "public int compare(Integer o1, Integer o2) {\n"+
                        "return o2.compareTo(o1);\n"+
                    "}\n"+
                "}).collect(Collectors.toList());\n"+
                "System.out.println(b.get(0));\n"+
            "}\n"+
        "}",
        "topic":"Cho một dãy các số tự nhiên, tìm và in ra 1 giá trị max của dãy này và tất cả các\n"+
        "chỉ số ứng với giá trị max này"
    },
    {
        "week":"tuan2",
        "excersice":5,
        "code":"import java.util.*;\n"+
        "public class bai5 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 5:Cho một dãy số tự nhiên, hãy đếm xem trong dãy số trên có bao nhiêu số nguyên
                //tố, có bao nhiêu hợp số.
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV : 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập độ dài của dãy số:');\n"+
                "int n = scanner.nextInt();\n"+
                "System.out.println('Nhập số:');\n"+
                "int b[] = new int[n];\n"+
                "for(int i = 0 ; i <n ; i++){\n"+
                    "int nhap = scanner.nextInt();\n"+
                    "b[i] = nhap;\n"+
                "}\n"+
                "List<Integer>c = new ArrayList<>();\n"+
                "List<Integer>d = new ArrayList<>();\n"+
                "for(int i = 0 ; i < b.length ; i++){\n"+
                    "if(isCheck(b,b[i])){\n"+
                        "c.add(b[i]);\n"+
                    "};\n"+
                    "if(isCheckHopso(b,b[i])==false){\n"+
                        "d.add(b[i]);\n"+
                    "}\n"+
                "}\n"+
                "System.out.println('Nguyên tố: '+ c.size());\n"+
        
                "System.out.println('Hợp số: '+d.size());\n"+
            "}\n"+
        
            "public static boolean isCheck(int b[],int input){\n"+
               "boolean KT = true;\n"+
                "if(input==1){\n"+
                    "KT=false;\n"+
                    "return KT;\n"+
                "}\n"+
                "for(int i=2; i<input;i++){\n"+
                    "if(input%i==0){\n"+
                        "KT=false;\n"+
                        "break;\n"+
                    "}\n"+
                "}\n"+
                "return KT;\n"+
            "}\n"+
            "public static boolean isCheckHopso(int b[],int input){\n"+
                "boolean KT = true;\n"+
                "if (input == 1) {\n"+
                    "KT=true;\n"+
                    "return KT;\n"+
                "}\n"+
                "for(int i=2;i<input;i++){\n"+
                    "if(input%i==0){\n"+
                        "KT=false;\n"+
                        "break;\n"+
                    "}\n"+
                "}\n"+
        
                "return KT;\n"+
            "}\n"+
        "}",
        "topic":"Cho một dãy số tự nhiên, hãy đếm xem trong dãy số trên có bao nhiêu số nguyên\n"+
        "tố, có bao nhiêu hợp số."
    }, 
    {
        "week":"tuan2",
        "excersice":6,
        "code":"import java.util.*;\n"+
        "import java.util.stream.Collectors;\n"+
        
        "public class bai6 {\n"+
           "public static void main(String[] args) {\n"+
                // Bai 6: Cho một dãy số tự nhiên, hãy in ra tất cả các số hạng của dãy trên thỏa mãn: số
                //này là ước số thực sự của 1 số hạng khác trong dãy trên.
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV : 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập độ dài dãy số:');\n"+
                "int n = scanner.nextInt();\n"+
                "System.out.println('Nhập số: ');\n"+
                "int b[] = new int[n];\n"+
                "for (int i = 0; i < n; i++) {\n"+
                    "int nhap = scanner.nextInt();\n"+
                    "b[i] =nhap;\n"+  
                "}\n"+
                "List<Integer> c = new ArrayList<>();\n"+
        
                "for(int i = 0 ; i < b.length;i++){\n"+
                    "if(b[i]==1){\n"+
                        "c.add(b[i]);\n"+
                        "continue;\n"+
                    "}\n"+
                    "for(int j=0;j<b.length;j++){\n"+
                        "if(b[i]==b[j]){\n"+
                            "continue;\n"+
                        "}\n"+
                        "if(b[j]%b[i]==0&&b[i]!=b[j]){\n"+
                            "c.add(b[i]);\n"+
                        "}\n"+
                    "}\n"+
                "}\n"+
                "c=c.stream().sorted().collect(Collectors.toList());\n"+
                "for(int i = 0 ; i <c.size()-1;i++){\n"+
                    "for(int j=i+1;j<c.size();j++){\n"+
                        "if(c.get(i)==c.get(j)){\n"+
                            "c.set(j,0);\n"+
                        "}\n"+
                    "}\n"+
                "}\n"+
                "c.stream().filter(i->i!=0).forEach(s-> System.out.print(s+''));\n"+
            "}\n"+
        "}",
        "topic":"Cho một dãy số tự nhiên, hãy in ra tất cả các số hạng của dãy trên thỏa mãn: số\n"+
        "này là ước số thực sự của 1 số hạng khác trong dãy trên."
    }, 
    {
        "week":"tuan2",
        "excersice":7,
        "code":"import java.util.*;\n"+
        "import java.util.stream.Collectors;\n"+
        "public class bai7 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 7:Cho một dãy số tự nhiên, hãy tìm 1 số tự nhiên nhỏ nhất c không bằng bất cứ số
                //nào trong dãy trên.
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV : 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập độ dài dãy số:');\n"+
                "int n = scanner.nextInt();\n"+
                "System.out.println('Nhập số: ');\n"+
                "int b[] = new int[n];\n"+
                "for (int i = 0; i < n; i++) {\n"+
                    "int nhap = scanner.nextInt();\n"+
                    "b[i] =nhap;\n"+
                "}\n"+
                "List<Integer> c = new ArrayList<>();\n"+
                "for(int i=0;i<b.length;i++){\n"+
                    "c.add(b[i]);\n"+
                "}\n"+
                "c=c.stream().sorted().collect(Collectors.toList());\n"+
                "for(int i = 0 ; i <c.size();i++){\n"+
                    "for(int j=i+1;j<c.size();j++){\n"+
                        "if(c.get(j)==c.get(i)){\n"+
                            "c.set(j,0);\n"+
                            "c.set(i,0);\n"+
                        "}\n"+
                    "}\n"+
                "}\n"+
                "System.out.println(c.stream().filter(s->s!=0).collect(Collectors.toList()).get(0));\n"+
            "}\n"+
        "}",
        "topic":"Cho một dãy số tự nhiên, hãy tìm 1 số tự nhiên nhỏ nhất c không bằng bất cứ số\n"+
        "nào trong dãy trên."
    },
    {
        "week":"tuan2",
        "excersice":8,
        "code":"import java.util.*;\n"+
        "public class    bai8 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 8:Cho một dãy số nguyên bất kỳ, hãy xóa đi trong dãy này các số hạng =0 và in ra
                //màn hình các số còn lại.
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV : 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập độ dài dãy số:');\n"+
                "int n = scanner.nextInt();\n"+
                "System.out.println('Nhập số: ');\n"+
                "int b[] = new int[n];\n"+
                "for (int i = 0; i < n; i++) {\n"+
                    "int nhap = scanner.nextInt();\n"+
                    "b[i] =nhap;\n"+
                "}\n"+
                "List<Integer> c = new ArrayList<>();\n"+
                "for(int i=0;i<b.length;i++){\n"+
                    "c.add(b[i]);\n"+
                "}\n"+
                "c.stream().filter(s->s!=0).forEach(s-> System.out.println(s));\n"+
            "}\n"+
        
        "}",
        "topic":"Cho một dãy số nguyên bất kỳ, hãy xóa đi trong dãy này các số hạng =0 và in ra\n"+
        "màn hình các số còn lại."
    },
    {
        "week":"tuan2",
        "excersice":9,
        "code":"import java.util.*;\n"+
        "public class bai9 {\n"+
            "public static void main(String[] args) {\n"+
                // Bài 9: Cho một dãy số nguyên bất kỳ, cho trước 1 số c. Hãy đếm có bao nhiêu số của
                //dãy trên =c; >c; <c.
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV : 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập độ dài dãy số:');\n"+
                "int n = scanner.nextInt();\n"+
                "System.out.println('Nhập số: ');\n"+
                "int b[] = new int[n];\n"+
                "for (int i = 0; i < n;i++) {\n"+
                    "int nhap = scanner.nextInt();\n"+
                    "b[i] =nhap;\n"+
                "}\n"+
                "List<Integer> c = new ArrayList<>();\n"+
                "for(int i=0;i<b.length;i++){\n"+
                    "c.add(b[i]);\n"+
                "}\n"+
                "System.out.println('Nhập số C');\n"+
                "int soC = scanner.nextInt();\n"+
                "System.out.println('Các số bằng số C:');\n"+
                "for(int i=0;i<c.size();i++){\n"+
                    "if(soC==c.get(i)){\n"+
                        "System.out.println(c.get(i));\n"+
                    "}\n"+
                "}\n"+
                "System.out.println('Các số nhỏ hơn số C:');\n"+
                "for(int i=0;i<c.size();i++){\n"+
                    "if(soC>c.get(i)){\n"+
                        "System.out.println(c.get(i));\n"+
                    "}\n"+
                "}\n"+
                "System.out.println('Các số lớn hơn số C:');\n"+
                "for(int i=0;i<c.size();i++){\n"+
                    "if(soC<c.get(i)){\n"+
                        "System.out.println(c.get(i));\n"+
                    "}\n"+
                "}\n"+
            "}\n"+
        "}",
        "topic":"Cho một dãy số nguyên bất kỳ, cho trước 1 số c. Hãy đếm có bao nhiêu số của"+
        "dãy trên =c; >c; <c."
    },
    {
        "week":"tuan2",
        "excersice":10,
        "code":"import java.util.*;\n"+
        "import java.util.stream.Collectors;\n"+
        
        "public class bai10 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 10: Cho một dãy số nguyên bất kỳ, hãy tìm ra 1 một dãy số liền nhau dài nhất bao
                //gồm các số bằng nhau. Hãy in ra số lượng và các chỉ số đầu tiên của dãy con này
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV : 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập độ dài dãy số:');\n"+
                "int n = scanner.nextInt();\n"+
                "System.out.println('Nhập số: ');\n"+
                "int b[] = new int[n];\n"+
                "for (int i = 0; i < n; i++) {\n"+
                    "int nhap = scanner.nextInt();\n"+
                    "b[i] =nhap;\n"+
                "}\n"+
                "List<Integer> c = new ArrayList<>();\n"+
                "for(int i=0;i<b.length;i++){\n"+
                    "c.add(b[i]);\n"+
                "}\n"+
                "c=c.stream().sorted().collect(Collectors.toList());\n"+
                "int max = 1;\n"+
                "List<Integer>d = new ArrayList<>();\n"+
                "for(int i = 0 ; i < c.size()-1;i++){\n"+
                    "int count =1;\n"+
                    "for(int j=\ni+1;j<c.size();j++){\n"+
                        "if(c.get(j)!=c.get(i)){\n"+
                            "break;\n"+
                        "}\n"+
                        "else{\n"+
                            "\n++count;\n"+
                        "}\n"+
                    "}\n"+
                    "if(max<count){\n"+
                        "max=count;\n"+
                        "d.add(c.get(i));\n"+//Chi so dau tien luu gia tri
                        "d.add(max);\n"+//Chi so thu hai luu so luong;
                    "}\n"+
        
                "}\n"+
                "for(int i=1;i<d.size();\ni+=2){\n"+
                    "if(max==d.get(i)){\n"+
                        "System.out.println('Dãy con có số lượng dãy số bằng nhau dài nhất là: \n'+max\n + ' chỉ số của dãy con là: \n'+d.get(i-1));\n"+
                        "break;\n"+
                    "}\n"+
                "};\n"+
            "}\n"+
        "}",
        "topic":"Cho một dãy số nguyên bất kỳ, hãy tìm ra 1 một dãy số liền nhau dài nhất bao\n"+
        "gồm các số bằng nhau. Hãy in ra số lượng và các chỉ số đầu tiên của dãy con này."
    },
    {
        "week":"tuan2",
        "excersice":11,
        "code":"import java.util.*;\n"+
        "public class bai11 {\n"+
            "public static void main(String[] args) {\n"+
                // Bài 11: Cho một dãy số nguyên bất kỳ. Hãy tìm 1 một dãy con liên tục đơn điệu tăng dài
                //nhất của dãy trên
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV : 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập độ dài dãy số:');\n"+
                "int n = scanner.nextInt();\n"+
                "System.out.println('Nhập số: ');\n"+
                "int b[] = new int[n];\n"+
                "for (int i = 0; i < n; i++) {\n"+
                    "int nhap = scanner.nextInt();\n"+
                    "b[i] =nhap;\n"+
                "}\n"+
                "List<Integer> c = new ArrayList<>();\n"+
                "for (int i = 0; i < b.length; i++) {\n"+
                    "c.add(b[i]);\n"+
                "}\n"+
                "List<Integer>d = new ArrayList<>();\n"+
                "int max = 1;\n"+
               "for(int i=0;i<c.size();i++){\n"+
                    "int count=1;\n"+
                    "for(int j=i;j<c.size()-1;j++){\n"+
                        "if(c.get(j)<=c.get(j+1)){\n"+
                            "++count;\n"+
                        "}\n"+
                        "else{\n"+
                            "break;\n"+
                        "}\n"+
                    "}\n"+
                    "if(max<count){\n"+
                        "max=count;\n"+
                        "d.add(max);\n"+//vi tri dau luu so luong day con
                        "d.add(i);\n"+// vi tri 2 luu vi tri bat dau day con
                    "}\n"+
               "}\n"+
                "for(int i=0;i<d.size();i+=2){\n"+
                    "if(d.get(i)==max){\n"+
                        "System.out.println('Độ dài dãy con dài nhất liên tục đơn điệu tăng là: '+max +' tại vị trí: '+d.get(i+1));\n"+
                        "System.out.println('Chỉ số dãy con đó là');\n"+
                        "int vitri=d.get(i+1);\n"+
                        "for(int j=0;j<max;j++){\n"+
                            "System.out.print(c.get(vitri)+'');\n"+
                            "vitri++;\n"+
                       "}\n"+
                    "}\n"+
                "}\n"+
            "}\n"+
        "}",
        "topic":"Cho một dãy số nguyên bất kỳ. Hãy tìm 1 một dãy con liên tục đơn điệu tăng dàinhất của dãy trên."
    },
    {
        "week":"tuan2",
        "excersice":12,
        "code":"import java.util.*;\n"+
        "public class bai12 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 12: Dãy số a[ ] được gọi là dãy con của b[ ] nếu từ b [ ] xóa đi 1 vài số sẽ thu được
                //a[ ]. Cho trước 2 dãy số nguyên a[ ]; b[ ]. Hãy kiểm tra xem a[ ] có là dãy con của b[ ]
                //hay không?.
                "System.out.println('Họ và tên: Vương Xuân Hiệu - MSSV : 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập độ dài số A:');\n"+
                "int n = scanner.nextInt();\n"+
                "int[] dayA = new int[n];\n"+
                "System.out.println('Nhập dãy số A:');\n"+
                "for(int i = 0 ; i <  n; i++){\n"+
                    "int nhap = scanner.nextInt();\n"+
                    "dayA[i] = nhap;\n"+
                "}\n"+
                "System.out.println('Nhập độ dài số B:');\n"+
                "int m = scanner.nextInt();\n"+
                "System.out.println('Nhập dãy số B:');\n"+
                "int[] dayB= new int[m];\n"+
        
                "for(int i = 0 ; i < m ; i++){\n"+
                    "int nhap = scanner.nextInt();\n"+
                    "dayB[i] = nhap;\n"+
                "}\n"+
        
                "if(isContains(dayA,dayB)){\n"+
                    "System.out.println('B contains A');\n"+
                "}\n"+
                "else{\n"+
                    "System.out.println('B no contains A');\n"+
                "}\n"+
            "}\n"+
            "public static boolean isContains(int[]a , int[]b){\n"+
                "boolean result = false;\n"+
                "int sizeA = a.length;\n"+
                "int sizeB= b.length;\n"+
                "if(sizeA>sizeB){\n"+
                   "return result;\n"+
                "}\n"+
                "for(int i=0;i<sizeB;i++){\n"+
                    "if(b[i]==a[0] && (sizeB-i)>=sizeA){\n"+
                        "int k=i;\n"+ 
                        "for(int j=0;j<sizeA;j++){\n"+
                            "if(a[j]==b[k]){\n"+
                                "result = true;\n"+
                                "++k;\n"+
                            "}\n"+
                            "else{\n"+
                                "break;\n"+
                            "}\n"+
                        "}\n"+
                    "}\n"+
                "}\n"+
                "System.out.println(result);\n"+
                "return result;\n"+
            "}\n"+
        "}",
        "topic":"Dãy số a[ ] được gọi là dãy con của b[ ] nếu từ b [ ] xóa đi 1 vài số sẽ thu được\n"+
        "a[ ]. Cho trước 2 dãy số nguyên a[ ]; b[ ]. Hãy kiểm tra xem a[ ] có là dãy con của b[ ]\n"+
        "hay không?."
    },
    {
        "week":"tuan2",
        "excersice":13,
        "code":"import java.util.Scanner;\n"+
        "public class bai13 {\n"+
        
            "static int count=0;\n"+
            //Bài 13: Vẽ ma trận xoắn với kích thước n.
            "public static void main(String[] args){\n"+
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV : 20181063');\n"+
                "init();\n"+
            "}\n"+
        
            "public static void init(){\n"+
                "int[][] matrix;\n"+
                "int m,n;\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập n: ');\n"+
                "n = scanner.nextInt();\n"+
                "matrix = new int[n][n];\n"+
                "topRight(matrix,0,0,n-1,n-1);\n"+
                "display(matrix);\n"+
            "}\n"+
        
            "public static void topRight(int matrix[][] , int x1, int y1,int x2, int y2){"+
                "for(int i = x1; i<=x2;i++){"+
                   "matrix[y1][i] = count++;"+
                "}"+
                "for(int i = y1+1 ; i<=y2;i++){"+
                    "matrix[i][x2] = count++;"+
                "}"+
                "if(x2-x1 > 0 && y2-y1>0){"+
                    "y1++;"+
                    "x2--;"+
                    "bottomLeft(matrix,x1,y1,x2,y2);"+
                "}"+
            "}"+
        
            "public static void bottomLeft(int matrix[][] , int x1, int y1,int x2, int y2){"+
                "for(int i = x2;i>=x1;i--){"+
                    "matrix[y2][i] = count++;"+
                "}"+
                "for(int i = y2-1;i>=y1;i--){"+
                    "matrix[i][x1] = count++;"+
                "}"+
                "if(x2-x1 > 0 && y2-y1>0){"+
                    "y2--;"+
                    "x1++;"+
                    "topRight(matrix,x1,y1,x2,y2);"+
                "}"+
            "}"+
        
            "public static void display(int matrix[][]){"+
                "for(int[] x: matrix){"+
                    "for(int i: x) System.out.printf('%5d',i);"+
                    "System.out.println('\n');"+
                "}"+
            "}"+
        "}",
        "topic":"Nhập vào kích thước ô vuông n*n, kiểm tra 3<=n<= 8. Hiển thị ra màn hình kết"+
        "quả như ma trận xoắn ốc"
    },

    /**------------------------------------------------------------------------------ */
    {
        "week":"tuan3",
        "excersice":1,
        "code":"import java.util.*;\n"+
        "public class bai1 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 01:
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập tên đầy đủ: ');\n"+
                "String n = scanner.nextLine();\n"+
                "String []arr = n.split('');\n"+
                "int count=0;\n"+
                "List<String>fullName = new ArrayList<>();\n"+
                "for(int i = 0 ; i <arr.length;i++){\n"+
                    "if(arr[0].equals(' ')&&i==0){\n"+
                        "for(int j=i+1;j< arr.length-1;j++){\n"+
                            "if(!arr[j].equals(' ')){\n"+
                                "i=j;\n"+
                                "break;\n"+
                            "}\n"+
                        "}\n"+
                    "}\n"+
                    "if(arr[i].equals(' )){\n"+
                        "fullName.add(arr[i]);\n"+
                        "for(int j=i+1;j<arr.length-1;j++){\n"+
                            "if(!arr[j].equals(' ')){\n"+
                                "fullName.add(arr[j]);\n"+
                                "i=j;\n"+
                                "break;\n"+
                            "}\n"+
                        "}\n"+
                    "}\n"+
                    "else{\n"+
                        "fullName.add(arr[i]);\n"+
                    "}\n"+
                "}"+
                "fullName.stream().forEach(s-> System.out.print(s));\n"+
            "}\n"+
        "}\n",
        "topic":"Cho trước 1 xâu ký tự là họ tên người đầy đủ nhưng khi nhập có thể thừa một số dấu cách. Hãy xóa đi các dấu cách thừa và in ra họ tên chính xác."
    },
    {
        "week":"tuan3",
        "excersice":2,
        "code":"import java.util.*;\n"+
        "public class bai2 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 2:
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println(''MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "String[]abc={'a','b','c'};\n"+
                "System.out.println('Nhập tên đầy đủ: ');\n"+
                "String n = scanner.nextLine();\n"+
                "String[] arr = n.split('');\n"+
                "if (arr.length < 3) {\n"+
                    "System.out.println('Số lần xuất hiện: 0');\n"+
                "} else {\n"+
                    "int count=0;\n"+
                    "for (int i = 0; i < arr.length; i++) {\n"+
                        "if (arr[i].equals('a') && arr.length-i>=3) {\n"+
                            "for (int j=0;j<3;j++){\n"+
                                "if(!arr[i+1].equals(abc[j+1])){\n"+
                                    "break;\n"+
                                "}\n"+
                                "else{\n"+
                                    "++count;\n"+
                                "}\n"+
                            "}\n"+
        
                        "}\n"+
                    "}\n"+
                    "System.out.println('Số dãy con là: '+count);\n"+
                "}\n"+
            "}\n"+
        "}\n",
        "topic":"Cho trước xâu ký tự bất kỳ. Hãy đếm xem trong xâu có bao nhiêu lần xuất hiện xâu con 'abc'"
    },
    {
        "week":"tuan3",
        "excersice":3,
        "code":"import java.util.*;\n"+
        "public class bai3 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 3:
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập tên đầy đủ: ');\n"+
                "String n = scanner.nextLine();\n"+
                "String[] arr = n.split('');\n"+
               "for(int i = arr.length-1; i>0;i--){\n"+
                    "if(arr[i].equals(' ')){\n"+
                        "for(int j=i+1;j<arr.length;j++){\n"+
                            "System.out.print(arr[j]);\n"+
                        "}\n"+
                        "break;\n"+
                    "}\n"+
                "}\n"+
            "}\n"+
        "}\n",
        "topic":"Cho trước 1 xâu ký tự là họ tên người đầy đủ, hãy tách ra phần tên của người này"
    },
    {
        "week":"tuan3",
        "excersice":4,
        "code":"import java.util.*;\n"+
        "public class bai4 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 4:
               "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập tên đầy đủ: ');\n"+
                "String n = scanner.nextLine();\n"+
                "String[] arr = n.split('');\n"+
                "for(int i= 0; i< arr.length;i++){\n"+
                    "if(arr[i].equals(' '){\n"+
                        "for(int j=0;j<i;j++){\n"+
                            "System.out.print(arr[j]);\n"+
                        "}\n"+
                        "break;\n"+
                    "}\n"+
                "}\n"+
            "}\n"+
        "}\n",
        "topic":"Cho trước 1 xâu ký tự là họ tên người đầy đủ, hãy tách ra phần họ của người này"
    },
    {
        "week":"tuan3",
        "excersice":5,
        "code":"import java.util.*;\n"+
        "public class bai5 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 5:
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập sau kí tự:'');\n"+
                "String n = scanner.nextLine();\n"+
                "String[]a=n.split('');\n"+
                "System.out.println('Xâu ban đầu ');\n"+
                "for(int i=0;i<a.length;i++){\n"+
                    "System.out.print(a[i]);\n"+
                "}\n"+
                "System.out.println('\n');\n"+
                "for(int i=0;i<a.length;i++){\n"+
                    "if(a[i].equals('0')){\n"+
                        "a[i]='1';\n"+
                    "}\n"+
                    "else if(a[i].equals('1')){\n"+
                        "a[i]='0';\n"+
                    "}"+
                "}"+
                "System.out.println('Xâu lúc sau:');\n"+
                "for(int i=0;i<a.length;i++){\n"+
                    "System.out.print(a[i]);\n"+
                "}\n"+
            "}\n"+
        "}\n",
        "topic":"Cho một xâu ký tự bao gồm toàn các ký tự 0,1. Hãy biến đổi xâu này theo cách 0=1,1=0 và in ra kết quả"
    },
    {
        "week":"tuan3",
        "excersice":6,
        "code":"import java.util.*;\n"+
        "public class bai6 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 6:
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
               "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập sau kí tự:');\n"+
                "String n = scanner.nextLine();\n"+
                "String[]a=n.split('');\n"+
                "System.out.println('Xâu ban đầu');\n"+
                "for(int i=0;i<a.length;i++){\n"+
                    "System.out.print(a[i]);\n"+
                "}\n"+
                "System.out.println('');\n"+
                "System.out.println('Xâu lúc sau:');\n"+
                "for(int i=a.length-1;i>=0;i--){\n"+
                    "System.out.print(a[i]);\n"+
                "}\n"+
            "}\n"+
        "}\n",
        "topic":"Cho trước xâu ký tự S, in ra xâu S1 ngược lại xâu S"
    },
    {
        "week":"tuan3",
        "excersice":7,
        "code":"import java.util.*;\n"+
        "public class bai7 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 7:
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập dãy ký tự: ');\n"+
                "String n = scanner.nextLine();\n"+
                "String[] arr = n.split('');\n"+
                "System.out.println('Số ban đầu: ');\n"+
                "for(int i=0;i<arr.length;i++){\n"+
                    "System.out.print(arr[i]);\n"+
                "}"+
                "for(int i=0;i<arr.length;i++){\n"+
                    "if(isCheckKyTu(arr[i])){\n"+
                        "arr[i]='$';\n"+
                    "}\n"+
                "}\n"+
                "System.out.println('');\n"+
                "System.out.println('Số lúc sau: ');\n"+
                "for(int i=0;i<arr.length;i++){\n"+
                    "System.out.print(arr[i]);\n"+
                "}\n"+
            "}\n"+
            "public static boolean isCheckKyTu(String input){\n"+
                "String mang[]={'1','2,'3','4','5','6','7','8','9','0'};\n"+
                "for(int i =0;i<mang.length;i++){\n"+
                    "if(input.equals(mang[i])){\n"+
                        "return true;\n"+
                    "}\n"+
                "}\n"+
                "return false;\n"+
            "}\n"+
        "}\n",
        "topic":"Cho trước xâu ký tự S. Hãy biến đổi S theo quy tắc sau: Chữ số thì biến thành'$', ký tự thì giữ nguyên."
    },
    {
        "week":"tuan3",
        "excersice":8,
        "code":"import java.util.*;\n"+
        "public class bai8 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 8:
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập xâu ký tự S1: ');\n"+
                "String n = scanner.nextLine();\n"+
                "String[] xauA = n.split('');\n"+
                "System.out.println('Nhập xâu ký tự S2: ');\n"+
                "String n1 = scanner.nextLine();\n"+
                "String[] xauB = n1.split('');\n"+
                "boolean KT = true;\n"+
                "int count=0;\n"+
                "if(xauA.length > xauB.length){\n"+
                    "System.out.println('Xâu A không xuất hiện trong xâu B!');\n"+
                "}\n"+
                "else {\n"+
                    "for (int i = 0; i < xauB.length; i++) {\n"+
                        "if(xauB[i].equals(xauA[0]) && xauB.length >= xauA.length){\n"+
                            "for(int j=0;j< xauA.length;j++){\n"+
                                "if(!xauA[j].equals(xauB[i])){\n"+
                                    "KT=false;\n"+
                                    "break;\n"+
                                "}\n"+
                                "else{\n"+
                                    "i++;\n"+
                                "}\n"+
                            "}\n"+
                            "if(KT){\n"+
                                "++count;\n"+
                            "}\n"+
                        "}\n"+
        
                    "}\n"+
                "}\n"+
                "System.out.println('Số lần xuất hiện xâu A trong xâu B là: '+count);\n"+
        
            "}\n"+
        "}\n",
        "topic":"Cho trước 2 xâu ký tự S1, S2. Hãy đếm xem xâu S1 xuất hiện trong S2 tại bao nhiêu vị trí"
    },
    {
        "week":"tuan3",
        "excersice":9,
        "code":"import java.util.*;\n"+
        "public class bai9 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 9:
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "System.out.println('Nhập xâu ký tự S: ');\n"+
                "String n = scanner.nextLine();\n"+
                "String[] xauA = n.split('');\n"+
                "System.out.println('Chỉ số dược đánh từ 0 -> n-1);\n"+
                "System.out.println('Chỉ số i: ');\n"+
                "int i= Integer.parseInt(scanner.nextLine());\n"+
                "System.out.println('Chỉ số j: ');\n"+
                "int j = Integer.parseInt(scanner.nextLine());\n"+
        
                "if(isCheckContains(i,j,xauA)){\n"+
                    "System.out.println('Một trong 2 chỉ số không nằm trong dãy!\n Vui lòng kiểm tra lại!');\n"+
                "}\n"+
                "else{"+
                    "System.out.println('Xâu ban đầu: ');\n"+
                    "for(int h=0;h< xauA.length;h++){\n"+
                        "System.out.print(xauA[h]);\n"+
                    "}\n"+
                    "System.out.println('');\n"+
                    "System.out.println('Xâu lúc sau đổi chỗ: ');\n"+
                    "String tmp = xauA[i];\n"+
                    "xauA[i] = xauA[j];\n"+
                    "xauA[j] =tmp;\n"+
                    "for(int h=0;h< xauA.length;h++){\n"+
                        "System.out.print(xauA[h]);\n"+
                    "}\n"+
                "}\n"+
        
            "}\n"+
        
            "public static boolean isCheckContains(int i,int j,String[] xau){\n"+
                "if(i>= xau.length || j>= xau.length){\n"+
                    "return true;\n"+
                "}\n"+
                "else{\n"+
                    "return false;\n"+
                "}\n"+
        
            "}\n"+
        "}\n",
        "topic":"Cho xâu S và 2 chỉ số i, j. Hãy đổi chỗ 2 vị trí i, j trong S."
    },
    {
        "week":"tuan3",
        "excersice":10,
        "code":"import java.util.*;\n"+
        "public class bai10 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 10:"+"
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "String s1='Vương Xuân Hiệu';\n"+
                "System.out.println('Xâu ký tự 1: '+s1);\n"+
                "String s2 = Vương Xuân Hiệu - SVBK';\n"+
                "System.out.println('Xâu ký tự 2: '+s2);\n"+
                "List<String> arr = Arrays.asList(s1,s2);\n"+
                "Map<Integer,String>stringMap = new HashMap<>();\n"+
                "int max = s1.length();\n"+
                "for(int i=1;i < arr.size();i++){\n"+
                    "if(max < arr.get(i).length()){\n"+
                        "max = arr.get(i).length();\n"+
                        "stringMap.put(1,arr.get(i));\n"+
                    "}\n"+
                "}\n"+
                "System.out.println('Xâu có độ dài nhất là: '+stringMap.get(1));\n"+
            "}\n"+
        
        "}\n",
        "topic":"Cho mảng xâu ký tự S1, S2, ..Sn. Hãy tìm và in ra phần tử xâu có độ dài lớn nhất."
    },
    {
        "week":"tuan3",
        "excersice":11,
        "code":"import java.util.*;\n"+
        "public class bai11 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 11:
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "String s1 = 'Nguyen Van An';\n"+
                "String s2 = 'Ha Tuan An';\n"+
                "String s3 = 'Vuong Xuan Hieu';\n"+
                "int count=0;\n"+
                "List<String> arr = Arrays.asList(s1,s2,s3);\n"+
                "for(int i=0;i<arr.size();i++){\n"+
                    "if(arr.get(i).contains('An')){\n"+
                        "++count;\n"+
                    "}\n"+
                "}\n"+
                "System.out.println('Số bạn có tên An: '+count);\n"+
        
            "}\n"+
        "}\n",
        "topic":"Cho danh sách họ tên đầy đủ học sinh. Hãy đếm xem có bao nhiêu bạn tên “An”."
    },
    {
        "week":"tuan3",
        "excersice":12,
        "code":"import java.util.*;\n"+
        "public class bai12 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 12:
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "String s1 = 'Nguyễn Thị A';\n"+
                "String s2 = 'Nguyễn Thị B';\n"+
               "String s3 = 'Nguyễn Thị C';\n"+
                "String s4 = 'Vương Xuân Hiệu';\n"+
                "int count=0;\n"+
                "List<String> arr = Arrays.asList(s1,s2,s3,s4);\n"+
                "for(int i=0;i<arr.size();i++){\n"+
                    "if(arr.get(i).contains('Thị')){\n"+
                        "++count;\n"+
                    "}\n"+
                "}\n"+
                "System.out.println('Số bạn có tên đệm Thị: '+count);\n"+
        
            "}\n"+
        "}\n",
        "topic":"Cho danh sách họ tên đầy đủ học sinh. Hãy đếm xem có bao nhiêu bạn có phần đệm là 'Thị'"
    },
    {
        "week":"tuan3",
        "excersice":13,
        "code":"import java.util.*;\n"+
        "public class bai13 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 13:
               "System.out.println('Họ và tên: Vương Xuân Hiệu);\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "String s1 = 'Nguyễn Văn H1';\n"+
                "String s2 = 'Nguyễn Văn T1';\n"+
                "String s3 = 'Nguyễn Thị CH1';\n"+
                "String s4 = 'Vương Xuân Hiệu';\n"+
                "int count=0;\n"+
                "List<String> arrA = Arrays.asList(s1,s2,s3,s4);\n"+
                "for(int h=0;h<arrA.size();h++) {\n"+
                    "String[]arr = arrA.get(h).split('');\n"+
                    "for (int i = arr.length - 1; i > 0; i--) {\n"+
                        "if (arr[i].equals(' ')) {\n"+
                            "for (int j = i + 1; j < arr.length; j++) {\n"+
                                "if(arr[j].equals('H')){\n"+
                                    "++count;\n"+
                                "}\n"+
                                "else{\n"+
                                    "break;\n"+
                                "}\n"+
                            "}\n"+
                            "break;\n"+
                        "}\n"+
                    "}\n"+
                "}\n"+
                "System.out.println('Số bạn có tên bắt đầu bằng chữ H là : '+count);\n"+
            "}\n"+
        "}\n",
        "topic":"Cho danh sách họ tên đầy đủ học sinh. Hãy đếm xem có bao nhiêu bạn có tên bắt đầu bằng chữ 'H'."
    },
    {
        "week":"tuan3",
        "excersice":14,
        "code":"import java.util.Scanner;\n"+

        "public class bai14 {\n"+
        
                "public static void main(String[] args) {\n"+
                    "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                    "System.out.println('MSSV: 20181063');\n"+
                    "Scanner scan = new Scanner(System.in);\n"+
                    "String s1 = scan.nextLine();\n"+
                    "int count= s1.length();\n"+
        
                    "char[] s2 = s1.toCharArray();\n"+
                    "char s3 = s2[0];\n"+
                    "for (int i = 1; i < count; i++) {\n"+
                        "for (int j = 0; j < count-1; j++) {\n"+
                            "s2[j] = s2[j+1];\n"+
                       "}\n"+
                        "s2[count-1] = s3;\n"+
                        "s3 = s2[0];\n"+
                    "}\n"+
                    "for (int i = 0; i < count; i++) {\n"+
                        "System.out.print(s2[i]);\n"+
                    "}\n"+
                "}\n"+
            "}\n",
        "topic":" Dãy xâu ký tự S1, S2,… được cho theo quy tắc sau: S1= “1111100000”, Sk thu được từ Sk-1 bằng cách thay đổi cho lần lượt các vị trí 1-2; 2-3; 3-4; 4-5; 5-6; 6-7; 7-8; 8-9; 9-10. Cho trước số tự nhiên N, Hãy in ra xâu Sn."
    },
    {
        "week":"tuan3",
        "excersice":15,
        "code":"import java.util.*;\n"+
        "public class bai15 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 15:
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "String S1= 'Xuân';\n"+
                "String S2= 'VươngHiệu';\n"+
                "System.out.println('Chèn xâu 1 vào giữa xâu 2:');\n"+
                "int tb = S2.length()/2;\n"+
                "String a1 = S2.substring(0,tb+1);\n"+
                "String a2=  S2.substring(S2.length()-tb);\n"+
                "System.out.println(a1+S1+a2);\n"+
            "}\n"+
        "}\n",
        "topic":"Cho trước 2 xâu ký tự S, S2. Hãy chèn xâu S1 vào giữa xâu S2 và in kết quả."
    },
    {
        "week":"tuan3",
        "excersice":16,
        "code":"import java.util.*;\n"+
        "public class bai16 {\n"+
            "public static void main(String[] args) {\n"+
                // Bai 16:
                "System.out.println('Họ và tên: Vương Xuân Hiệu');\n"+
                "System.out.println('MSSV: 20181063');\n"+
                "Scanner scanner = new Scanner(System.in);\n"+
                "String xau1= 'Xuân';\n"+
                "String xau2= 'VươnXgunHâiệu';\n"+
                "boolean KT = true;\n"+
                "for(int i=0;i<xau1.length();i++){\n"+
                    "if(!xau2.contains(xau1.split('')[i])){\n"+
                        "KT = false;\n"+
                    "}\n"+
                "}\n"+
                "if(KT){\n"+
                    "System.out.println('Xâu 1 là con của xâu 2!');\n"+
                "}\n"+
                "else{\n"+
                    "System.out.println('Xâu 1 không là con của xâu 1');\n"+
                "}\n"+
            "}\n"+
        "}\n",
        "topic":"Cho trước 2 xâu S1, S2. Hãy xét xem xâu S1 có phải là xâu con của S2 nếu xóa bỏ vài kí tự của xâu S2 ta được xâu S1."
    },

]

document.querySelectorAll(".weeken").forEach(e=>e.addEventListener("click",(e)=>{
    var tuan;
    var bt;
    var classWeek = document.querySelectorAll(".weeken");
    for(var i of classWeek){
        if(i.classList.contains("active")){
            i.classList.remove("active");
        }
    }
    e.target.classList.add("active");
    var weekTopic = document.querySelectorAll(".week");
    if(e.target.classList.contains("w1")){
        for(var j of weekTopic){
            if(j.classList.contains("week-one")){
                j.classList.add("active--week");
                document.querySelectorAll(".button-baitap").forEach(e=>e.addEventListener("click",(e)=>{
                    var buttonBT = document.querySelectorAll(".button-baitap");
                    for(var h of buttonBT){
                        if(h.classList.contains("avtive--baitap")){
                            h.classList.remove("avtive--baitap");
                        }
                    }
                    e.target.classList.add("avtive--baitap");
                    tuan = e.target.classList[1];
                    bt = e.target.classList[2]
                    getResult(tuan,bt)

                }))
                
            }
            else{
                j.classList.remove("active--week");
            }
        }
    }
    else if(e.target.classList.contains("w2")){
        for(var i of weekTopic){
            if(i.classList.contains("week-two")){
                i.classList.add("active--week");
                document.querySelectorAll(".button-baitap").forEach(e=>e.addEventListener("click",(e)=>{
                    var buttonBT = document.querySelectorAll(".button-baitap");
                    for(var h of buttonBT){
                        if(h.classList.contains("avtive--baitap")){
                            h.classList.remove("avtive--baitap");
                        }
                    }
                    e.target.classList.add("avtive--baitap");
                    tuan = e.target.classList[1];
                    bt = e.target.classList[2]
                    getResult(tuan,bt)
                }))
            }
            else{
                i.classList.remove("active--week");
            }
        }
    }
    else if(e.target.classList.contains("w3")){
        for(var i of weekTopic){
            if(i.classList.contains("week-three")){
                i.classList.add("active--week");
                document.querySelectorAll(".button-baitap").forEach(e=>e.addEventListener("click",(e)=>{
                    var buttonBT = document.querySelectorAll(".button-baitap");
                    for(var h of buttonBT){
                        if(h.classList.contains("avtive--baitap")){
                            h.classList.remove("avtive--baitap");
                        }
                    }
                    e.target.classList.add("avtive--baitap");
                    tuan = e.target.classList[1];
                    bt = e.target.classList[2]
                    getResult(tuan,bt)
                }))
            }
            else{
                i.classList.remove("active--week");
            }
        }
    }


}))




function getResult(tuan,tenbai){
    tenbai = Number.parseInt(tenbai);
    for(var element of exerciseTopic){
        if(tuan==element.week && tenbai==element.excersice){
            document.querySelector("#debai").textContent = element.topic;
            document.querySelector("#code").textContent = element.code
            console.log(element);
        }
    }
}

