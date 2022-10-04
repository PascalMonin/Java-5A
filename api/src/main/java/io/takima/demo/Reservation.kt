package io.takima.demo

import java.util.Date
import javax.persistence.*

/**
 *
 */
@Entity(name = "reservations")
data class Reservation(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var id: Long?,
        @Column(name = "hoteId") var hoteId: Long?,
        @Column(name = "listInvites") var listInvites: String?,
        @Column(name = "dateDebut") var dateDebut: Date?,
        @Column(name = "dateFin") var dateFin: Date?) {
    constructor() : this(null, null, null, null, null)

}
