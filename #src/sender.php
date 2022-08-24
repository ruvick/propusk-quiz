<?
header("Access-Control-Allow-Origin: *"); 
// HTTP_ORIGIN
// REMOTE_ADDR
// REQUEST_METHOD
// print_r(json_encode($_SERVER));

if (
    ($_SERVER["HTTP_ORIGIN"] !== "https://localhost:3000")&&
    ($_SERVER["HTTP_ORIGIN"] !== "https://istmarket77.com")&&
    ($_SERVER["HTTP_ORIGIN"] !== "http://istmarket77.com")
    
    ) {
        http_response_code(403);
        die($_SERVER["HTTP_ORIGIN"]); 
    }


    $to = 'asmi046@gmail.com'; 
    $subject = 'Сообщение с сайта istmarket77.com';
    $message = '
                <html>
                    <head>
                        <title>'.$_REQUEST["msg"].'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_REQUEST['name'].'</p>
                        <p>Телефон: '.$_REQUEST['tel'].'</p> 
                        <p>Сообщение: '.$_REQUEST['msg'].'</p>                                     
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Заявка с сайта - Пропуска ао старой цене <noreply@istmarket77.com>\r\n";
        if (mail($to, $subject, $message, $headers)) {
            http_response_code(200);
            die(array());
        } else {
            http_response_code(403);
            die(array());
        }



?>