<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['captcha'])) {
        // تم التحقق بنجاح
        echo "شكراً لتأكيد أنك إنسان!";
    } else {
        echo "يرجى التأكيد بأنك لست روبوتاً.";
    }
}
?>
