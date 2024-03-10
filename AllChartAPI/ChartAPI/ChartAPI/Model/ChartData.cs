using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ChartAPI.Model
{
    public class ChartData
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ChartID { get; set; }
        public string[] Labels { get; set; }
        public Dataset[] Datasets { get; set; }
    }
}
