import java.util.ArrayList;

class Employee {

    int id;
    String name;
    double salary;

    Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    void displayDetails() {`
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + salary);
        System.out.println("--------------------");
    }
}

public class EmployeeSystem {
    public static void main(String[] args) {
     
        ArrayList<Employee> employees = new ArrayList<>();

        
        Employee emp1 = new Employee(1, "John Doe", 50000);
        Employee emp2 = new Employee(2, "Jane Smith", 55000);
        Employee emp3 = new Employee(3, "Mike Johnson", 52000);

        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);

        System.out.println("Employee Details:");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}