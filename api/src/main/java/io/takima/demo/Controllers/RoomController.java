package io.takima.demo.Controllers;

import io.takima.demo.DAO.RoomDAO;
import io.takima.demo.Entities.Room;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/rooms")
@CrossOrigin
public class RoomController {


    private final RoomDAO roomDAO;

    public RoomController(RoomDAO roomDAO) {
        this.roomDAO = roomDAO;
    }
    @GetMapping()
    public List<Room> getRooms() {
        Iterable<Room> it = this.roomDAO.findAll();
        List<Room> rooms = new ArrayList<>();
        it.forEach(e -> rooms.add(e));

        return rooms;
    }

    @PostMapping("/add")
    public Room addRoom(@RequestBody Room room) {


        return this.roomDAO.save(room);
    }

    @DeleteMapping("/{id}")
    public void deleteRoom(@PathVariable Long id) {
        this.roomDAO.deleteById(id);
    }

}
