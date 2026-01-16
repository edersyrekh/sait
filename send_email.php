<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    // Создание заголовков письма
    $to = "kytyl1405@gmail.com";
    $subject = "Запись на прием";
    $message = "Имя: $name\nТелефон: $phone\nEmail: $email\nДата: $date\nВремя: $time";
    $headers = "From: $email";

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo "Запись успешно отправлена!";
    } else {
        echo "Ошибка при отправке записи.";
    }
}
?>
