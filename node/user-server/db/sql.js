module.exports = {
    userList : `SELECT * FROM t_users`, // 조회
    userInfo : `SELECT * FROM t_users WHERE user_id = ?`, // 단건 조회
    userAdd : `INSERT INTO t_users SET ?`, // 등록
    userModify : `UPDATE t_users SET ? WHERE user_id = ?`, // 수정
    userDelete : `DELETE FROM t_users WHERE user_id = ?` // 삭제
}