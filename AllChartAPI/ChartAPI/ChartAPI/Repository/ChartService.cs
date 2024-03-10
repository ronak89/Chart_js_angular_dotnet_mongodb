using ChartAPI.Interface;
using ChartAPI.Model;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ChartAPI.Repository
{
    public class ChartService : IChartData
    {
        private readonly IMongoCollection<ChartData> chartCollection;

        public ChartService(IOptions<ChartDBSettings> chartDatabaseSetting)
        {
            var mongoClient = new MongoClient(chartDatabaseSetting.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(chartDatabaseSetting.Value.DatabaseName);
            chartCollection = mongoDatabase.GetCollection<ChartData>(chartDatabaseSetting.Value.ChartCollectionName);
        }
        public async Task AddChartAsync(ChartData chartDetails)
        {
            await chartCollection.InsertOneAsync(chartDetails);
        }

        public async Task<List<ChartData>> ChartListAsync()
        {
            return await chartCollection.Find(_ => true).ToListAsync();
        }

        public Task DeleteChartAsync(string chartID)
        {
            throw new NotImplementedException();
        }

        public Task<ChartData> GetChartDetailByIdAsync(string chartID)
        {
            throw new NotImplementedException();
        }

        public Task UpdateChartAsync(string productId, ChartData chartDetails)
        {
            throw new NotImplementedException();
        }
    }
}
