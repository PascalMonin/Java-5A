package io.takima.demo.Services;

import io.takima.demo.DAO.ReservationDAO;
import io.takima.demo.Entities.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ReservationService {

    private final ReservationDAO reservationDAO;

    @Autowired
    public ReservationService(ReservationDAO reservationDAO) {
        this.reservationDAO = reservationDAO;
    }

    public Iterable<Reservation> listReservations() {
        return reservationDAO.findAll();
    }

}
