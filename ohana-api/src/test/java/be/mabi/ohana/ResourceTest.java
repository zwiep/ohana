package be.mabi.ohana;

import org.assertj.core.util.Sets;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.format.Formatter;
import org.springframework.format.support.DefaultFormattingConversionService;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;
import java.util.Set;

@RunWith(MockitoJUnitRunner.class)
public abstract class ResourceTest {

    private MockMvc mockMvc;

    @Before
    public void initMockMvc() {
        mockMvc = MockMvcBuilders
                .standaloneSetup(getResourceUnderTest())
                .setMessageConverters(
                        new MappingJackson2HttpMessageConverter(ObjectMapperFactory.instance())
                )
                .setConversionService(getConversionService())
                .setControllerAdvice(getControllerAdvice().toArray())
                .build();
    }

    protected abstract Object getResourceUnderTest();

    protected abstract List<Object> getControllerAdvice();

    private DefaultFormattingConversionService getConversionService() {
        DefaultFormattingConversionService conversionService = new DefaultFormattingConversionService();
        getFormatters().forEach(conversionService::addFormatter);
        return conversionService;
    }

    protected Set<Formatter<?>> getFormatters() {
        return Sets.newHashSet();
    }

    public MockMvc mockMvc() {
        return mockMvc;
    }

    public ResultActions perform(RequestBuilder requestBuilder) throws Exception {
        return mockMvc().perform(requestBuilder);
    }
}
