<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';
// ----------
$badIP = [];
$ipAddr = $_SERVER['REMOTE_ADDR'];
// $today    = date('dmYHi');
$today    = date('d-m-Y_H:i');
$formname = $_POST['formname'];
$name = $_POST['phone'];
//spam ловушка
$spam = $_POST['email'];
$spam1 = $_POST['name'];
//добавление рандомного числа
$num = rand(100000, 999999);
$sub = ' №'.$num;

// Настройки
$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->Host = 'smtp.yandex.ru';  
$mail->SMTPAuth = true;                      
$mail->Username = 'avtopodborstas'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'revjtlwzwagfibmz'; // Ваш пароль от почты, настройка приложений
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('avtopodborstas@yandex.ru', 'кровля'); // Ваш Email, Имя
$mail->addAddress('lagunatlt@yandex.ru'); // Email получателя
// $mail->addAddress('lagunatlt@yandex.ru'); // Еще один email, если нужно.
if (!empty($formname)) {
    $formnametext = $formname;
} else {
    $formnametext = 'Узнать стоимость работ';
};

    // $formnametext = $formname;



//if(!in_array($ipAddr, $badIP) && empty($spam) && empty($spam1) && !empty($name)) { // если не заполнено скрытое поле и если IP-адрес не находится в нашем чёрном списке
    
    ///file_put_contents("send-mail.log", "\n{$today}\nIP:{$ipAddr}\nОт:{$name}\n", FILE_APPEND); chmod("send-mail.log", 0600);
    
    // если всё ок - отправляем письмо
    
            // file_put_contents ($_SERVER['DOCUMENT_ROOT'].'/orders_num.txt', $num."/n",FILE_APPEND);
            $mail->isHTML(true); 
            $mail->Subject = "Заявка $sub КРОВЛЯ $today"; // Заголовок письма
            $mail->Body =  "<p>Необходима консультация со специалистом $name123</p>
                            <p>к/т <b>$name</b></p>
                            <hr/>
                            <p><i>Сообщение отправлено с формы сайта 'КРОВЛЯ монтаж и ремонт'</i></p>"; // Текст письма
//}
//else { // если роботом было заполнено скрытое поле или если IP-адрес в чёрном списке
 //   file_put_contents("spam.log", "\n{$today}\nСпам бот\n$spam\n$spam1\n$name\nIP:{$ipAddr}\n", FILE_APPEND); chmod("spam.log", 0600);
//	exit(); // сразу выходим
//}
// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}



?>
   