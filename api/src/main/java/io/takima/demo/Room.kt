package io.takima.demo

import javax.persistence.*

/**
 *
 */
@Entity(name = "rooms")
data class Room(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var id: Long?,
        @Column(name = "nom") var nom: String?,
        @Column(name = "capacite") var capacite: Int?,
        @Column(name = "equipements") var equipements: Int?,
        @Column(name = "photo") var photo: String?) {
    constructor() : this(null, null, null, null, null)

}
