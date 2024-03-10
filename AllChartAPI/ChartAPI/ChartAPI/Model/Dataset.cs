using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ChartAPI.Model
{
    public class Dataset
    {
        [BsonId]
       
        public int Id { get; set; }
        [BsonElement("LabelName")]
        public string Label { get; set; }
        public int[] Data { get; set; }
        public string BackgroundColor { get; set; }
    }
}
