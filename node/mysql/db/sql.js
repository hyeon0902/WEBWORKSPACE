module.exports = {
    customerList : `SELECT * FROM customers`, // 조회
    customerInfo : `SELECT * FROM customers WHERE id = ?`, // 단건 조회
    customerInsert : `INSERT INTO customers SET ?`, // 등록
    customerUpdate : `UPDATE customers SET ? WHERE id = ?`, // 수정
    customerDelete : `DELETE FROM customers WHERE id = ?`, // 삭제
}