function isAccount(str) {
    regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)) {
        return 'account hợp lệ';
    } else {
        return 'account không hợp lệ';
    }
}