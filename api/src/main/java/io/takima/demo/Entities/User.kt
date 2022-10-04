package io.takima.demo.Entities

import java.util.Date
import javax.persistence.*

/**
 *
 */
@Entity(name = "users")
data class User(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var uid: String?,
        @Column(name = "nom") var nom: String?,
        @Column(name = "prenom") var prenom: String?,
        @Column(name = "email") var email: String?,
        @Column(name = "birthdate") var birthdate: Date?) {
    constructor() : this(null, null, null, null, null)

}
