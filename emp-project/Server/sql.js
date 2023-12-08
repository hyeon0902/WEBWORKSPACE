module.exports = {
    employeesList: `SELECT e.emp_no,
                           e.first_name,
                           e.last_name,
                           e.gender,
                           e.hire_date,
                           (SELECT salary FROM salaries WHERE to_date = CAST('9999-01-01' AS DATE) AND emp_no = e.emp_no) as salary,
                           d.dept_no,
                           d.dept_name
                    FROM employees e JOIN dept_emp h
                                ON(e.emp_no = h.emp_no)
                                JOIN departments d
                                ON( h.dept_no = d.dept_no )
                                JOIN salaries s
                                ON( e.emp_no = s.emp_no)
                    WHERE h.to_date = CAST('9999-01-01' AS DATE)
                    AND s.to_date = CAST('9999-01-01' AS DATE)
                    ORDER BY e.emp_no DESC
                    LIMIT 0, 10`,
    employeesInfo: `SELECT e.emp_no,
                           e.first_name,
                           e.last_name,
                           e.gender,
                           e.hire_date,
                           (SELECT salary FROM salaries WHERE to_date = CAST('9999-01-01' AS DATE) AND emp_no = e.emp_no) as salary,
                           d.dept_no,
                           d.dept_name
                    FROM employees e JOIN dept_emp h
                                ON(e.emp_no = h.emp_no)
                                JOIN departments d
                                ON( h.dept_no = d.dept_no )
                                JOIN salaries s
                                ON( e.emp_no = s.emp_no)
                    WHERE h.to_date = CAST('9999-01-01' AS DATE)
                    AND s.to_date = CAST('9999-01-01' AS DATE)
                    AND e.emp_no = ?`,
    empInsert: `INSERT INTO employees 
                SET ?`,
    deptempInsert : `INSERT INTO dept_emp
                     SET ? to_date = CAST('9999-01-01' AS date)`,
    salaryInsert : `INSERT INTO salaries
                    SET ? to_date = CAST('9999-01-01' AS date)`,
    employeesUpdate: `UPDATE employees
                      SET ?
                      WHERE emp_no = ?`,
    employeesDelete: `UPDATE dept_emp
                      SET to_date = ?
                      WHERE emp_no = ?`
}