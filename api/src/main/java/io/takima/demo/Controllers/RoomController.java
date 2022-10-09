package io.takima.demo.Controllers;

import io.takima.demo.DAO.RoomDAO;
import io.takima.demo.Entities.Room;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    @GetMapping("/update/{id}")
    public Optional<Room> getRoomById(@PathVariable Long id)
    {
        return this.roomDAO.findById(id);
    }

    @PostMapping("/add")
    public Room addRoom(@RequestBody Room room) {


        return this.roomDAO.save(room);
    }


    @PostMapping("/update")
    public Room updateRoom(@RequestBody Room room)
    {

        return this.roomDAO.save(room);
    }


    @DeleteMapping("/{id}")
    public void deleteRoom(@PathVariable Long id) {
        this.roomDAO.deleteById(id);
    }

}
