using ChartAPI.Interface;
using ChartAPI.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChartAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChartDataController : ControllerBase
    {
        private readonly IChartData chartDataService;
        public ChartDataController(IChartData chartDataService) => this.chartDataService = chartDataService;


        [HttpGet]
        public async Task<List<ChartData>> Get()
        {
            return await chartDataService.ChartListAsync();
        }
        [HttpPost]
        public async Task<IActionResult> Post(ChartData chartDetails)
        {
            await chartDataService.AddChartAsync(chartDetails);
            return CreatedAtAction(nameof(Get), new
            {
                id = chartDetails.ChartID
            }, chartDetails);
        }

        //[HttpGet]
        //public IActionResult GetChartData()
        //{
        //    // Define your static chart data here
        //    var chartData = new
        //    {
        //        labels = new[]
        //        {
        //            "2022-05-10",
        //            "2022-05-11",
        //            "2022-05-12",
        //            "2022-05-13",
        //            "2022-05-14",
        //            "2022-05-15",
        //            "2022-05-16",
        //            "2022-05-17"
        //        },
        //        datasets = new[]
        //        {
        //            new
        //            {
        //                label = "Sales",
        //                data = new[] {467, 576, 572, 79, 92, 574, 573, 576},
        //                backgroundColor = "blue"
        //            },
        //            new
        //            {
        //                label = "Profit",
        //                data = new[] {542, 542, 536, 327, 17, 0, 538, 541},
        //                backgroundColor = "limegreen"
        //            }
        //        }
        //    };

        //    return Ok(chartData);
        //}
    }
}

