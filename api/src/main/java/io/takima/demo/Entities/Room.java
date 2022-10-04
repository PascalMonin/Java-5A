package io.takima.demo.Entities;


import javax.persistence.*;
import java.util.Objects;

@Entity(name="rooms")
public class Room {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;


    @Column(name = "nom")
    private String nom;

    @Column(name="capacite")
    private Long capacite;

    @Column(name = "equipements")
    private String  equipements;

    @Column (name = "photo")
    private String photo;

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Room{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", capacity=" + capacite +
                ", equipements='" + equipements + '\'' +
                ", photo='" + photo + '\'' +
                '}';
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setName(String nom) {
        this.nom = nom;
    }

    public Long getCapacite() {
        return capacite;
    }

    public void setCapacite(Long capacity) {
        this.capacite = capacity;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }



    @Override
    public int hashCode() {
        return Objects.hash(id, nom, capacite, photo);
    }

    public String getEquipements() {
        return equipements;
    }

    public void setEquipements(String equipements) {
        this.equipements = equipements;
    }
}
