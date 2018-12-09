import { DataSource, DataSourceConfig } from 'apollo-datasource';

export class ContextualDataSource extends DataSource {
  protected context: any;

  public initialize(config: DataSourceConfig<any>) {
    this.context = config.context;
  }
}
