package io.takima.demo.Controllers;

import io.takima.demo.DAO.RoomDAO;
import io.takima.demo.Entities.Room;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.util.*;

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


    @PostMapping(path= "/upload")

    public Optional<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
        String message;
        Path root = Paths.get("./front/src/uploads");
        try {
            Files.createDirectory(root);
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize folder for upload!");
        }

        String filename = file.getOriginalFilename();


        long now = new Timestamp(System.currentTimeMillis()).getTime();
        String extension = filename.substring(filename.lastIndexOf("."));
        String new_filename = Long.toString(now).concat(extension);
        try {
            try {
                Files.copy(file.getInputStream(), root.resolve(new_filename));

            } catch (Exception e) {
                throw new RuntimeException("FAIL!");
            }
            message = "Successfully uploaded!";
            return Optional.of(new_filename);
        }catch (Exception e)
        {
            return Optional.empty();
        }


    }


    @PostMapping("/update")
    public Room updateRoom(@RequestBody Room room)
    {
        return this.roomDAO.save(room);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteRoom(@PathVariable Long id) {
        this.roomDAO.deleteById(id);
    }

}
