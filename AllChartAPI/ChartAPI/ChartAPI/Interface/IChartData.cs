using ChartAPI.Model;

namespace ChartAPI.Interface
{
    public interface IChartData
    {
        public Task<List<ChartData>> ChartListAsync();
        public Task<ChartData> GetChartDetailByIdAsync(string chartID);
        public Task AddChartAsync(ChartData chartDetails);
        public Task UpdateChartAsync(string productId, ChartData chartDetails);
        public Task DeleteChartAsync(String chartID);
    }
}
