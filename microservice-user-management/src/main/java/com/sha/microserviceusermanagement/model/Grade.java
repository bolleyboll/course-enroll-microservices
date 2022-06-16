package com.sha.microserviceusermanagement.model;
import javax.persistence.*;
import java.io.Serializable;
@Entity
public class Grade
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
//
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private String username;

    private int semester;

    private String grade;

    public Grade()
    {

    }

    public Grade(long id, String username, int semester, String grade) {
        this.id = id;
        this.username = username;
        this.semester = semester;
        this.grade = grade;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getSemester() {
        return semester;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }
}