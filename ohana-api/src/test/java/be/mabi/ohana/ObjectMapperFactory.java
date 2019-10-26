package be.mabi.ohana;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.type.CollectionType;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.nio.file.Path;
import java.util.List;

import static com.fasterxml.jackson.annotation.PropertyAccessor.*;
import static com.fasterxml.jackson.databind.DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES;

public class ObjectMapperFactory {
    private final static ObjectMapper OBJECT_MAPPER = new ObjectMapper()
            .configure(FAIL_ON_UNKNOWN_PROPERTIES, false)
            .setVisibility(FIELD, JsonAutoDetect.Visibility.ANY)
            .setVisibility(CREATOR, JsonAutoDetect.Visibility.NONE)
            .setVisibility(GETTER, JsonAutoDetect.Visibility.NONE)
            .setVisibility(IS_GETTER, JsonAutoDetect.Visibility.NONE)
            .setVisibility(SETTER, JsonAutoDetect.Visibility.NONE)
            .registerModule(new Jdk8Module())
            .registerModule(new JavaTimeModule())
            .disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

    public static ObjectWriter writer() {
        return OBJECT_MAPPER.writer();
    }

    public static ObjectReader reader() {
        return OBJECT_MAPPER.reader();
    }

    public static ObjectMapper instance() {
        return OBJECT_MAPPER;
    }

    public static String json(Object object) throws IOException {
        return instance().writeValueAsString(object);
    }

    public static byte[] jsonByteArray(Object object) throws JsonProcessingException {
        return instance().writeValueAsBytes(object);
    }

    public static <T> T json(Path path, Class<T> clazz) throws IOException {
        return reader().forType(clazz).readValue(path.toFile());
    }

    public static <T> T json(String json, Class<T> clazz) throws IOException {
        return reader().forType(clazz).readValue(json);
    }

    public static <T> List<T> json(String json, CollectionType clazz) throws IOException {
        return reader().forType(clazz).readValue(json);
    }

    public static <T> CollectionType list(Class<T> clazz) {
        return reader().getTypeFactory().constructCollectionType(List.class, clazz);
    }

    public static JsonNode readTree(String json) throws IOException {
        return reader().readTree(json);
    }

    public static JsonNode readTreeFromClassPathResource(String classPathResource) {
        try {
            return reader().readTree(new ClassPathResource(classPathResource).getInputStream());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
