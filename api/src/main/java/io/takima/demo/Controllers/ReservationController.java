package io.takima.demo.Controllers;

import io.takima.demo.DAO.ReservationDAO;
import io.takima.demo.Entities.Reservation;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reservations")
@CrossOrigin
public class ReservationController {


    private final ReservationDAO reservationDAO;

    public ReservationController(ReservationDAO reservationDAO) {
        this.reservationDAO = reservationDAO;
    }
    @GetMapping()
    public List<Reservation> getReservations() {
        Iterable<Reservation> it = this.reservationDAO.findAll();
        List<Reservation> reservations = new ArrayList<>();
        it.forEach(e -> reservations.add(e));

        return reservations;
    }

    @GetMapping("/update/{id}")
    public Optional<Reservation> getReservationById(@PathVariable Long id)
    {
        return this.reservationDAO.findById(id);
    }

    @PostMapping("/add")
    public Reservation addReservation(@RequestBody Reservation reservation) {


        return this.reservationDAO.save(reservation);
    }


    @PostMapping("/update")
    public Reservation updateReservation(@RequestBody Reservation reservation)
    {

        return this.reservationDAO.save(reservation);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteReservation(@PathVariable Long id) {
        this.reservationDAO.deleteById(id);
    }

}
