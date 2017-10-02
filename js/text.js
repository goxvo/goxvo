var a = Math.random() + ""          //产生一个随机数  
var rand1 = a.charAt(5)             //的到这个数的第五个字符(实际还是从0~9的数字)  
quotes = new Array              //创建消息数组  
quotes[1] = '语录1'               //这里分配十句随机出现的文本  
quotes[2] = '语录2'  
quotes[3] = '语录3'  
quotes[4] = '语录4'  
quotes[5] = '语录5'  
quotes[6] = '语录6'  
quotes[7] = '语录7'  
quotes[8] = '语录8'  
quotes[9] = '语录9'  
quotes[0] = '语录10'  
var quote = quotes[rand1]   //由随机数选择一句话  
//-->  
</script>  
<script language="JavaScript">  
<!-- Hide  
document.write( quote )     //将上面选择的话写进页面  
